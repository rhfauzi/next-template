const Category = ({ category, templates }) => {
  return (
    <div>
      <h4>{category.name}</h4>
      <div className="template-list">
        {templates.map((template) => (
          <div key={template.id} className="template-item">
            <img src={template.thumbnail} alt={template.name} />
            <h5>{template.name}</h5>
            <p>{template.about}</p>
            <p>Price: ${template.price}</p>
            <p>Rating: {template.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
