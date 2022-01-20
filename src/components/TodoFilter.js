function TodoFilter({setSearchTerm}) {

    return(
    <>
    <form className='todo-form'>
      
        
          <input
            placeholder='Enter a keyword'
            type="text"
            onChange={event => {setSearchTerm(event.target.value)}}
            name='text'
            className='todo-input'
            
          />
          <button className='todo-button'>
            Filter
          </button>
        
      
    </form>
    </>);
}


export default TodoFilter;