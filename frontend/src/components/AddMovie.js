import React from 'react';

const AddMovie = () => {
  return (
    <div>
      <h1>Add New Movie</h1>
      <form method='POST' action='http://localhost:8080/add-movie'>
        <div>
          <label>Name</label>
          <input type='text' name='name' required />
        </div>
        <div>
          <label>Image</label>
          <input type='text' name='image' required />
        </div>
        <div>
          <label>Description</label>
          <input type='text' name='description' required />
        </div>
        <div>
          <button type='submit'>Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
