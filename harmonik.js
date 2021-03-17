// let x       = [],
//     vpot    = [],
//     idx     = [],
//     efunction = [],
//     vtemp   = [],
//     iter    = 0,
//     nloop   = 10;
function submit() {
    x       = [],
    vpot    = [],
    idx     = [],
    efunction = [],
    vtemp   = [],
    iter    = 0,
    nloop   = 10; 
let   xmin    = parseFloat(document.getElementById('xmin').value),
      xmax    = parseFloat(document.getElementById('xmax').value),
      dx      = parseFloat(document.getElementById('dx').value),

      v0      = parseFloat(document.getElementById('v0').value),
      om      = parseFloat(document.getElementById('omega').value);
      ef      = document.getElementById('ef');
var   initE   = parseFloat(document.getElementById('initE').value)

let 

    leb     = xmax - xmin,
    ngrid   = leb/dx;

    // console.log(initE)
    //initE1 = initE
    
    //console.log(initE + 1e-16)
    // getVpot();
    
    function getVpot(xmin,leb,om,x,v0 = 0)
  {
    //$xp = [];
    xp = x - xmin - leb / 2;
    //console.log(xp, x, xmin, leb)
    pot = (0.5 * om * xp * xp) + v0;
    return pot;
  }
    function getPotential(xmin,dx,ngrid,v0,vpot,x,leb,om,idx, potensial_function = getVpot) {
    for (let i = 0; i < ngrid; i++) {
        x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);

        vpot[i] = potensial_function(xmin,leb,om,x[i], v0);
        idx[i] = i;
        //console.log(vpot[i])
    }
    return vpot
    }
    getPotential(xmin,dx,ngrid,v0,vpot,x,leb,om,idx, potensial_function = getVpot)
    
    //console.log(new Float32Array(initE))
    //console.log(energy_new)
    //console.log(initE1 - energy_new)
    //console.log(energy_new)

    //singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)

    function energy(initE) {
      singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)
      while (initE - energy_new > 0) {
        initE = initE + ((initE - energy_new)/energy_new)
        //console.log(initE)
        singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)
        //console.log(energy_new)
    }
    }
    energy(initE)

    // function spekEnergy(initE) {
    //   var spekE = []
    //   initE0 = 0
    //   while (energy_new < initE) {
    //     console.log(initE0)
    //     energy(initE0)
    //     spekE = spekE.push(energy_new)
    //     initE0 = initE0 + 0.1
    //   }
    // }
    var spekE = []
      initE0 = 0
      energy(initE0)
      energy_new1 = energy_new
      while (energy_new1 < initE) {
        
        energy(initE0)
        //console.log(initE0, energy_new1)
        energy_new1 = energy_new
        spekE.push(energy_new1)
        //console.log(energy_new1 - initE0,initE0, energy_new1)
        initE0 = energy_new1 + (energy_new1 - initE0)
        
      }

    //spekEnergy(initE)
    //console.log(spekE)
    // efunction.forEach(function(item) {
    //   var listItem = document.createElement('li');
    //   listItem.className = "nostyle";
    //   listItem.innerText = item;
    //   document.getElementById("ef").appendChild(listItem);
    //  });

    
    // vpot.forEach(function(item) {
    //   var listItem = document.createElement('li');
    //   listItem.className = "nostyle";
    //   listItem.innerText = item;
    //   document.getElementById("ef").appendChild(listItem);
    //  });
    //console.log(idx)
    //console.log(x)
     Enew.innerHTML = energy_new;

    var numbers = [65, 44, 12, 4],
    x1 = [-1, -0.99, -0.98, -0.97];
    numbers.forEach(myFunction,x)

  function myFunction(item, index, arr) {
  //console.log(arr, item)
  arr[index] = {"y":item, "label": x[index]};
  }

  function spekEnergy1(item, index, arr) {
  //console.log(arr, item)
  arr[index] = {"x":0, "y": item};
  }
    // console.log(numbers)
    efunction.forEach(myFunction,x)
    vpot.forEach(myFunction,x)
    spekE.forEach(spekEnergy1)
    //console.log(spekE)
    
    var chart = new CanvasJS.Chart("chartContainer1",
    {

      title:{
      text: "Fungsi Gelombang"
      },
       data: [
      {
        type: "line",

        dataPoints: efunction
      }
      ]
    });

    chart.render();

    var chart = new CanvasJS.Chart("chartContainer2",
    {

      title:{
      text: "Fungsi Potensial"
      },
       data: [
      {
        type: "line",

        dataPoints: vpot
      }
      ]
    });

    chart.render();

    var chart = new CanvasJS.Chart("chartContainer3",
    {

      title:{
      text: "Fungsi Potensial"
      },
       data: [
      {
        type: "scatter",

        dataPoints: spekE
      }
      ]
    });

    chart.render();
}


//console.log(efunction)

