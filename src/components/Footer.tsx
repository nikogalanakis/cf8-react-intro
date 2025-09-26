
const Footer=()=>{
    const currentYear:number = new Date().getFullYear();
    return(
        <>
            <footer>
                <div>
                    @{currentYear} Coding Factory 8. Allrights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;