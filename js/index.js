// Plugins
tinymce.init({
    selector: '#descripcion_txt',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
//Code

const pokemones = [];
const cargarTable = ()=>{
  //1. obtener una referencia a la tabla
  let tbody = document.querySelector("#tabla_tbody");
  //Eliminar todos los elemntos que tenga el tbody, para que no se dupliquen
  tbody.innerHTML= "";
  //2. Recorrer la lista
  for(let i=0;i<pokemones.length; ++i){
    let p =pokemones [i]; 
    //3. por cada elemento generar una fila (tr)
      let tr = document.createElement("tr");
    //4. por cada atributo agregar celdas
      let tdNro = document.createElement("td");
      tdNro.innerText = (i+1)

      let tdNombre = document.createElement("td");
      tdNombre.innerText = (p.nombre)

      let tdTipo = document.createElement("td");
      
      let icono = document.createElement("i")
      if(p.tipo =="Fuego"){
       // <i class="fas fa-fire"></i>
       icono.classList.add("fas","fa-fire","text-danger","fa-3x");
      }
      if(p.tipo == "Planta"){
        //planta: <i class="fas fa-leaf"></i>
        icono.classList.add( "fas","fa-leaf","text-success","fa-3x");
      }
      if(p.tipo == "Rayo"){
        //<i class="fas fa-bolt"></i
        icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
      }
      if(p.tipo == "Agua"){
        //agua: <i class="fas fa-tint"></i>
        icono.classList.add("fas","fa-tint","text-primary","fa-3x");
      }
      if(p.tipo == "Normal"){
        //<i class="fas fa-star"></i>
        icono.classList.add("fas","fa-star", "text-info", "fa-3x");
      }
      tdTipo.appendChild(icono);
      tdTipo.classList.add("text-center")
      let tdDesc = document.createElement("td");
      tdDesc.innerHTML = (p.descripcion)

      let tdAcciones = document.createElement('td');
      
      

    //5. agregar las celdas al tr
      tr.appendChild(tdNro)
      tr.appendChild(tdNombre)
      tr.appendChild(tdTipo)
      tr.appendChild(tdDesc)
      tr.appendChild(tdAcciones)

    //6.agregar el tr a la tabla
    tbody.appendChild(tr)
  }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    // Value es para obtener el valor de loos input de texto
    let nombre = document.querySelector("#nombre_txt").value;
    // Esto lo saque de la pagina del tinymce, es para obtener lo escrito, obtener valor
    let descripcion = tinymce.get("descripcion_txt").getContent();
    //checked indica si el dariobutton esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual q los input
    let tipo = document.querySelector("#tipo-select").value;

    //Como crear un objeto
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
   // como guardar en una lista de elementos, se debe crear primero la lista linea 20

    pokemones.push(pokemon); //Append
    cargarTable();
    // Tituloo, Texto, Tipo: Success, info, dange. 
    Swal.fire("Exito!","Pokemon Registrado", "success")
  
} );