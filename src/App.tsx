import React, { useState, useEffect } from 'react';

// TODO: add filter for 30 days, 6 months, all time
// TODO: add filter for amount of songs (10, 20, 30, 40, 50)

const App = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>({});
  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);

  const clientId = '79d6320d37564530a02c332d96377012';
  const redirectUri = 'http://localhost:3000';
  const scopes = ['user-top-read'];

  const getAccessToken = () => {
    if (!accessToken) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`;
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('spotify_access_token');
    const savedTimestamp = localStorage.getItem('spotify_expiry_date');

    if (savedToken && Number(savedTimestamp) > Number(new Date())) {
      setAccessToken(savedToken);
    }

    const getUser = () => {
      if (accessToken && !user.name) {
        fetch('https://api.spotify.com/v1/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res: any) => res.json())
          .then((res) => {
            setUser({
              name: res.display_name,
              followers: res.followers.total,
              image: res.images[0].url,
              url: res.external_urls.spotify,
            });
          })
          .catch((err: string) => console.error('Oh no!', err));
      }
    };

    if (window.location.hash) {
      const hash: any = window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc: any, curr: any) => {
          if (curr) {
            const parts = curr.split('=');
            acc[parts[0]] = decodeURIComponent(parts[1]);
          }
          return acc;
        }, {});
      const now = new Date();
      setAccessToken(hash.access_token);
      localStorage.setItem('spotify_access_token', hash.access_token);
      localStorage.setItem(
        'spotify_expiry_date',
        `${now.setHours(now.getHours() + 1)}`
      );

      if (accessToken) {
        window.location.hash = '';
      }
    }

    getUser();
  }, [accessToken, user]);

  useEffect(() => {
    const getData = (type = 'artists', term = 'short', amount = 10) => {
      if (accessToken && !user.name) {
        fetch(
          `https://api.spotify.com/v1/me/top/${type}?time_range=${term}_term&limit=${amount}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
          .then((res: any) => res.json())
          .then(({ items }) => {
            switch (type) {
              case 'artists':
                setArtists(items);
                break;
              case 'tracks':
                setTracks(items);
                break;
              default:
                break;
            }
          })
          .catch((err: string) => console.error('Oh no!', err));
      }
    };
    getData('artists', 'short', 20);
    getData('tracks', 'short', 20);
  }, [accessToken, artists, user.name]);

  return (
    <>
      {!accessToken ? (
        <button onClick={getAccessToken} type="button">Authenticate with Spotify</button>
      ) : (
        <>
          {user?.name && <h1>Welcome back, {user.name}</h1>}
          <h2>My favourite artists</h2>
          <ol>
            {artists.map((artist) => (
              <li key={artist.id}>
                <strong>{artist.name}</strong>
              </li>
            ))}
          </ol>
          <h2>My favourite tracks</h2>
          <ol>
            {tracks.map((track) => (
              <li key={track.id}>
                <strong>{track.name}</strong> by {track.artists[0].name}
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default App;
