
// import React, { useState } from "react";
// const Readmore=()=>{
//     const [showMore, setShowMore] = useState(false);
//     const text =  'CaPay is a super application that includes 68 high qualityscreens to help you launch digital wallet application projects and speed up your design process. Designed on 2 leading platforms Sketch & Figma makes it easy to customize to create impressive projects weee I am longer show more please CaPay is a super application that includes 68 high qualityscreens to help you launch digital wallet application projects and speed up your design process. Designed on 2 leading platforms Sketch & Figma makes it easy to customize to create impressive projects weee I am longer show more please';
//     const getText = () => {
//         // For Text that is shorter than desired length
//         if (text.length <= 258) return text;
//         // If text is longer than desired length & showMore is true
//         if (text.length > 258 && showMore) {
//           return (
//             <>
//               <p>{text}</p>
//               <button className="btn btn-primary"
//                 onClick={() => setShowMore(false)}>
//                 Show Less
//               </button>
//             </>
//           );
//         }
//                  // If text is longer than desired length & showMore is false
//                  if (text.length > 258) {
//                     return (
//                       <>
//                         <p>{text.slice(0, 258)}</p>
              
//                         <button className="btn btn-primary" style={{width:'200px'}}
//                           onClick={() => setShowMore(true)}>
//                           Show Full Description
//                         </button>
//                       </>
//                     );
//                   }
//                 };
//   //Then just call in component
//   <p>{getText()}</p>
// }
      
// export default Readmore;
class Feed extends React.Component {
  constructor(props) {
    super(props);

    setLoadmore= {
      items: [],
      visible: 3,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

const [loadMore,setLoadmore]=useState(false);
  loadMore() {
    setLoadmore((prev) => {
      return {visible: prev.visible + 4};
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      res => res.json()
    ).then(res => {
      this.setState({
        items: res
      });
    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    });
  }

  render() {
    return (
      <section className="feed">
        <h1>Simple Load More/Pagination with React</h1>
        <h2>With Array.prototype.slice() and the power of component state!</h2>

        <div className="tiles" aria-live="polite">
          {items.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="tile fade-in" key={item.id}>
                  <span className="count">{index+1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
          {setLoadmore.visible < setLoadmore.items.length &&
             <button onClick={loadMore} type="button" className="load-more">Load more</button>
          }
        </section>
    );
  }
}

ReactDOM.render(<Feed />, document.getElementById('feed'));