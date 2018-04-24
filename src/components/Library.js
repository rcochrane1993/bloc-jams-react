import React, {Component} from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';

class Library extends Component {
    constructor(props) {
      super(props);
      this.state = {albums: albumData };
    }
   render() {
    return (
      <section className='library'>
        {
          this.state.albums.map((album,index) =>
            <Link to={`/album/${album.slug}`} key={index} >
              <table id="album-selection">
                <tbody>
                  <tr className="album-display">
                    <td>
                      <img id= "album-picture" src={album.albumCover} alt={album.title} />
                    </td>
                    <td>
                      <div>{album.title}</div>
                      <div>{album.artist}</div>
                      <div>{album.songs.length} songs </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
          )
        }
      </section>
     );
   }
 }

export default Library;
