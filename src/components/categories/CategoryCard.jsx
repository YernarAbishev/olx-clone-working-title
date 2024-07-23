function CategoryCard({category}) {
    return (
        <div class="category-item">
            <img src={category.imageUrl} class="category-img" alt="Category" />
            <span class="category-title">{category.name}</span>
        </div>
    );
}

export default CategoryCard;