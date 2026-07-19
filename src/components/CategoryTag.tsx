interface CategoryTagProps {
    name: string;
    color: string;
}

const CategoryTag = ({ name, color }: CategoryTagProps) => {
    return (
        <div className={`text-sm font-medium px-10 py-2 rounded-2xl ${color}`}>
            {name}
        </div>
    );
};

export default CategoryTag;