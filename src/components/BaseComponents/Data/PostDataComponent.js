
import React, {Component} from 'react';

import PostDataLoad from './PostData.json'
// import { id } from 'postcss-selector-parser';

export class PostDataComponent extends Component {
   
    state = {
        index: 0,
      };
     
      onToggleList = () => {
        this.setState(prevState => ({
          index: 1
        }));
      }

    render() {
        // const [index, setindex] = useState(0);
        // const getTitle = (i) => {
        //     setindex(i)
        // }
    return (
      <div>

          {
            PostDataLoad[this.state.index].columns.title
          }
            { 
                PostDataLoad.map((postDetail, i ) => {
                    return(
                        <h1>{postDetail.columns.html}</h1>
                    )
                })
            }
      </div>
    )
  }
}

