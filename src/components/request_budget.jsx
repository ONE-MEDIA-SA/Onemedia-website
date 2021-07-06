import './assets/request_budget.css'



export const RequestBudget = () => {
   
    return (
    <> 
    <div className="container card-0 justify-content-center ">
    <div className="card-body px-sm-4 px-0">
        <div className="row justify-content-center mb-5">
            <div className="col-md-10 col">
                <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left"> Solicitar Orçamento </h3>
                <p className="mt-md-4 ml-md-0 ml-2 text-center text-sm-left"> Solicitar Orçamento online Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
        </div>
        <div className="row justify-content-center round">
            <div className="col-lg-10 col-md-12 ">
                <div className="card shadow-lg card-1">
                    <div className="card-body inner-card">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div className="form-group"><label for="first-name">Nome</label><input type="text" className="form-control" id="first-name" placeholder="Type your Name" /> </div>
                                <div className="form-group"> <label for="Mobile-Number">Contacto</label> <input type="text" className="form-control" id="Mobile-Number" placeholder=""/> </div>
                                <div className="form-group"> <label for="inputEmail4">Tipo de site que você precisa</label> <select className="form-control">
                                        <option>Landing page</option>
                                        <option>E-commerce</option>
                                        <option>Single page</option>
                                    </select> </div>
                                <div className="form-group"> <label for="time">Endereço para o Site</label> <input type="text" className="form-control" id="time" placeholder=""/> </div>
                                {/* <div className="form-group"><label for="skill">Tipo de Domínio</label> <input type="text" className="form-control" id="skill" placeholder=""/> </div> */}
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div className="form-group"> <label for="last-name">Apelido</label> <input type="text" className="form-control" id="last-name" placeholder=""/> </div>
                                <div className="form-group"> <label for="phone">Email</label> <input type="email" className="form-control" id="email" placeholder=""/> </div>
                                <div className="form-group"> <label for="Evaluate Budget">Localização</label> <input type="text" className="form-control" id="Evaluate Budget" placeholder=""/> </div>
                                <div className="form-group"> <label for="Company-Name">Nome da empresa</label> <input type="text" className="form-control" id="Company-Name" placeholder=""/> </div>
                                {/* <div className="form-group"> <label for="inputEmail4">Country</label> <select className="form-control">
                                        <option>India</option>
                                        <option>China</option>
                                        <option>UK</option>
                                    </select></div> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10 col-12">
                                <div className="form-group files"><label className="my-auto">Anexar um arquivo</label> <input id="file" type="file" className="form-control" /></div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10 col-12">
                                <div className="form-group"> <label for="exampleFormControlTextarea2">Outros detalhes</label> <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="5"></textarea></div>
                                <div className="row justify-content-end mb-5">
                                    <div className="col-lg-4 col-auto "><button type="button" className="btn btn-primary btn-block"><small className="font-weight-bold">Solicitar orcamento</small></button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}