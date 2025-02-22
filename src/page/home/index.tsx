import React, { useState } from 'react'
import categories from 'src/const/categories'
import authors from 'src/const/authors'
import templates from 'src/const/templates'
import Category from 'src/components/Category'
import Author from 'src/components/Author'

export default function Home() {
  const [activeTab, setActiveTab] = useState('category')

  const filterByCategory = (categoryId: any) => {
    return templates.filter((template) => template.category_id === categoryId)
  }

  const filterByAuthor = (authorId: any) => {
    return templates.filter((template) => template.author_id === authorId)
  }

  return (
    <div>
      {/* Tabs */}
      <div className="tabs">
        <button onClick={() => setActiveTab('category')}>By Category</button>
        <button onClick={() => setActiveTab('author')}>By Author</button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'category' ? (
        <div>
          <h3>Templates by Category</h3>
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              templates={filterByCategory(category.id)}
            />
          ))}
        </div>
      ) : (
        <div>
          <h3>Templates by Author</h3>
          {authors.map((author) => (
            <Author key={author.id} author={author} templates={filterByAuthor(author.id)} />
          ))}
        </div>
      )}
    </div>
  )
}
