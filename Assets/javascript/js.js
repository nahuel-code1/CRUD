let cars = [{
    marca: "-",
    modelo: "-",
    color: "-",
    año: "-",
    precio: "$-",
    id: 1
}]

// Main functions

function printCars(datos) {
    let container = document.getElementById("cars-print-container");
    container.innerHTML = "";
    datos.forEach((dato => {
        let nuevosDatos = `<tr>
                                <td>${dato.marca}</td>
                                <td>${dato.modelo}</td>
                                <td>${dato.color}</td>
                                <td>${dato.año}</td>
                                <td>${dato.precio}</td>
                                <td><button class="btn btn-danger" onclick="deleteCar(${dato.id})">Eliminar</button></td>
                                <td> <button class="btn btn-warning" onclick="updateCar(${dato.id})">Editar</button></td>
                            </tr>`
        container.innerHTML += nuevosDatos;
    }));
}

printCars(cars);

function addCar() {
    let inputMarca = document.getElementById("imputMarca").value;
    let inputModelo = document.getElementById("imputModelo").value;
    let inputColor = document.getElementById("imputColor").value;
    let inputAño = document.getElementById("imputAño").value;
    let inputPrecio = document.getElementById("imputPrecio").value;

    let newCars = {
        marca: inputMarca,
        modelo: inputModelo,
        color: inputColor,
        año: inputAño,
        precio: inputPrecio,
        id: generateId()
    }
    cars.push(newCars);
    printCars(cars);
    closureForm();
    resetForm()
}


function deleteCar(id) {
    let index = cars.findIndex((car => car.id === id));
    cars.splice(index, 1);
    printCars(cars);
}

function updateCar(id) {
    showAddCar();
    let index = cars.findIndex((dato => dato.id === id));
    let actualCar = cars[index];
    document.getElementById("imputMarca").value = actualCar.marca;
    document.getElementById("imputModelo").value = actualCar.modelo;
    document.getElementById("imputColor").value = actualCar.color;
    document.getElementById("imputAño").value = actualCar.año;
    document.getElementById("imputPrecio").value = actualCar.precio;

    document.getElementById("create-button").classList.add("d-none");
    cars.splice(index, 1)
}




// secundary functions

function generateId() {
    let biggerId = 0;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id > biggerId) {
            biggerId = cars[i].id;
        }
    }
    return biggerId + 1;
}

function showAddCar() {
    let x = document.getElementById("add-Car-Form-container");
    x.classList.remove("d-none");
}


function closureForm() {
    document.getElementById("add-Car-Form-container").classList.add("d-none");
}

function resetForm() {
    document.getElementById("form-container").reset();
}


printCars(cars);