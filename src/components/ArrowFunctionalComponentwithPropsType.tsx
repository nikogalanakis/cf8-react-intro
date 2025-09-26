// type PropA = {
//     title: string;
// }
// type PropB = {
//     description: string;
// }
//interface
// type Props = PropA & PropB;

interface Props{
    title: string;
}
interface Props{
    description: string;
}
const ArrowFunctionalComponentwithPropsType =({title,description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            <h1 className="text-center text-gray-700">{description}</h1>
        </>
    )
}

export default ArrowFunctionalComponentwithPropsType;