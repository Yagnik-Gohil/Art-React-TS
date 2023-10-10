function Category(props: any) {
    const { categoryData } = props;
    const categories = categoryData.map((category: { image: string, altTxt: string, title: string }) => {
        return (
            <li className="category-list catgryList">
                <div className="card-img catgry-img">
                    <img src={category.image} alt={category.altTxt} title={category.title} />
                </div>
                <div className="catgry-titl ml-24"><h3>{category.title}</h3></div>
            </li>
        );
    });
    return (<ul className="category-grid pl-0 mt-34 lp-catg-load">
        {categories}
    </ul>);
}

export default Category;