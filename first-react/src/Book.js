const Book=({number,img,author,title,children})=>{
    // const {number,img,author,title}=props.book;
    const event=(title)=>{
      alert(title);
    }
    
    return (
      <article>
        {children}
      <img src={img} alt="" />
      <h1>{author}</h1>
      <p>{title}</p>
      <p>{number}</p>
      <button onClick={()=>event(title)}>  
      {/* if we want to happen some event while listening event and we have to pass anything and go to another function then pass like that */}
        eventlistener
      </button>
      </article>
    );
  }
  export default Book
  