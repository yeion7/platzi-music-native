import React from "react";
import "react-native";

import ResultsList from "./ResultsList";

import renderer from "react-test-renderer";

describe("renders test ", () => {
  it("render ResultsList component", () => {
    const tree = renderer
      .create(
        <ResultsList
          tracks={[
            {
              id: "0dMDz3n9qLfRXBNlRhK5U7",
              name: "Joe Tex, These Taming Blues",
              duration_ms: 330813,
              preview_url: "https://p.scdn.co/mp3-preview/45d2ad042bf08d7951076097a1f7f15677ab7a89?cid=null",
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                  },
                  href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                  id: "57kIMCLPgkzQlXjblX7XXP",
                  name: "Phosphorescent",
                  type: "artist",
                  uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                }
              ],
              album: {
                album_type: "album",
                artists: [
                  {
                    external_urls: {
                      spotify: "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP"
                    },
                    href: "https://api.spotify.com/v1/artists/57kIMCLPgkzQlXjblX7XXP",
                    id: "57kIMCLPgkzQlXjblX7XXP",
                    name: "Phosphorescent",
                    type: "artist",
                    uri: "spotify:artist:57kIMCLPgkzQlXjblX7XXP"
                  }
                ],
                available_markets: [
                  "AD",
                  "AR",
                  "AT",
                  "AU",
                  "BE",
                  "BG",
                  "BO",
                  "BR",
                  "CA",
                  "CH",
                  "CL",
                  "CO",
                  "CR",
                  "CY",
                  "CZ",
                  "DE",
                  "DK",
                  "DO",
                  "EC",
                  "EE",
                  "ES",
                  "FI",
                  "FR",
                  "GB",
                  "GR",
                  "GT",
                  "HK",
                  "HN",
                  "HU",
                  "ID",
                  "IE",
                  "IS",
                  "IT",
                  "JP",
                  "LI",
                  "LT",
                  "LU",
                  "LV",
                  "MC",
                  "MT",
                  "MX",
                  "MY",
                  "NI",
                  "NL",
                  "NO",
                  "NZ",
                  "PA",
                  "PE",
                  "PH",
                  "PL",
                  "PT",
                  "PY",
                  "SE",
                  "SG",
                  "SK",
                  "SV",
                  "TR",
                  "TW",
                  "US",
                  "UY"
                ],
                external_urls: {
                  spotify: "https://open.spotify.com/album/0TticAuqNj26EhgT2Em3qD"
                },
                href: "https://api.spotify.com/v1/albums/0TticAuqNj26EhgT2Em3qD",
                id: "0TticAuqNj26EhgT2Em3qD",
                images: [
                  {
                    height: 640,
                    url: "https://i.scdn.co/image/ccd62a1aa5c66d581622a1be2c86cfd0299a3b45",
                    width: 640
                  },
                  {
                    height: 300,
                    url: "https://i.scdn.co/image/cc9f4c667dc6fa65839c121262a7e7ba5dd49547",
                    width: 300
                  },
                  {
                    height: 64,
                    url: "https://i.scdn.co/image/1ea5645d08a452f50c9720aad99d4ea6e8cdd8b6",
                    width: 64
                  }
                ],
                name: "Aw Come Aw Wry",
                type: "album",
                uri: "spotify:album:0TticAuqNj26EhgT2Em3qD"
              },
              track_number: 3
            }
          ]}
          albums={[
            {
              id: "1bypUQ8qclz4N9ocZgAmPj",
              name: "Aw Man Oh Dear",
              image: "https://i.scdn.co/image/172a34d390848ba1615374fa4f77c304de01a919",
              artists: {
                external_urls: {
                  spotify: "https://open.spotify.com/artist/77PtLt3o5UjeAT38mVlGaQ"
                },
                href: "https://api.spotify.com/v1/artists/77PtLt3o5UjeAT38mVlGaQ",
                id: "77PtLt3o5UjeAT38mVlGaQ",
                name: "Aw Man Oh Dear",
                type: "artist",
                uri: "spotify:artist:77PtLt3o5UjeAT38mVlGaQ"
              },
              url_songs: "https://api.spotify.com/v1/albums/1bypUQ8qclz4N9ocZgAmPj",
              type: "album"
            }
          ]}
          handlePress={jest.fn}
          handlePressAlbum={jest.jn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});