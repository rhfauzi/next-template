const TemplateCV = ({ template }) => {
  return (
    <div className="template-item">
      <img src={template.thumbnail} alt={template.name} />
      <h5>{template.name}</h5>
      <p>{template.about}</p>
      <p>Price: ${template.price}</p>
      <p>Rating: {template.rating}</p>
    </div>
  )
}

export default TemplateCV
