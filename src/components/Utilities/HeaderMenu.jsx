const HeaderMenu = ({title}) => {
    return (
        <>
            <div className="pt-5 flex justify-center items-center">
                <h1 className="md:text-3xl text-md text-color-primary">{title}</h1>
            </div>
        </>    
    )
}

export default HeaderMenu