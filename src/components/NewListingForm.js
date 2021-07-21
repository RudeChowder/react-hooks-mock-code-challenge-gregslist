import React, { useState } from "react"

const NewListingForm = ({ onSubmitNewListingForm }) => {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: ""
  })

  const handleChangeInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmitNewListingForm = (event) => {
    event.preventDefault()
    onSubmitNewListingForm(formData)
    setFormData({
      description: "",
      image: "",
      location: ""
    })
  }

  return (
    <form className="new-listing-form" onSubmit={handleSubmitNewListingForm}>
      <label>Create new listing: </label>
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChangeInput}></input>
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChangeInput}></input>
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChangeInput}></input>
      <button>Submit</button>
    </form>
  )
}

export default NewListingForm
