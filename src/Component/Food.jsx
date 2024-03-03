
function Food(props) {
    return <div className="flex gap-4">
    <img src={props.image} alt="" className="w-[140px] h-[110px] rounded" />
    <div>
        <h1 className="font-bold text-1xl ">{props.name}</h1>
        <p>{props.desc}</p>
        <h1 className="font-bold text-1xl">${props.price}</h1>
        <button className="bg-yellow-500 px-4 py-3 ">Order Name</button>
    </div>
</div>
}



export default Food;