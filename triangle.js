function submit() {
    x       = [],
    vpot    = [],
    idx     = [],
    efunction = [],
    vtemp   = [],
    iter    = 0,
    nloop   = 10;

 let    xmin    = parseFloat(document.getElementById('xmin').value),
        xmax    = parseFloat(document.getElementById('xmax').value),
        dx      = parseFloat(document.getElementById('dx').value),

        v0      = parseFloat(document.getElementById('v0').value),
        tgi     = parseFloat(document.getElementById('tinggi').value);
        tt     = parseFloat(document.getElementById('titik_tengah').value)
        ef      = document.getElementById('ef');
var     initE   = parseFloat(document.getElementById('initE').value)

let 

    leb     = xmax - xmin,
    ngrid   = leb/dx;

    // console.log(initE)
    //initE1 = initE
    
    //console.log(initE + 1e-16)
    // getVpot();
    
    function getVpot(xmin,xmax,leb,tgi,tt,x,v0 = 0) {
    xp = x - xmin - leb/ 2;
    //console.log(x - xmin - leb/2)
    //console.log((typeof(x,xp)))
    // xp = x
    //console.log((x[0] - xmin - leb) / 2)
    //console.log(xmin,xmax,leb,tgi,tt)
    if (x < tt) {
        xkir = xmin - tt;
        pot = (tgi / xkir) * (xp - tt) + v0;
        //echo $xkir;
        //console.log(xkir,pot)
        return pot;
    } else {
        xkan = xmax - tt;
        pot = (tgi / xkan) * (xp - tt) + v0;
        //echo $xkan;
        //console.log(xkan, pot)
        return pot;
            }
    }

    function getPotential(xmin,dx,ngrid,v0,vpot,x,leb,tgi,tt,idx, potensial_function = getVpot) {
    for (let i = 0; i < ngrid; i++) {
        x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);

        vpot[i] = potensial_function(xmin,xmax,leb,tgi,tt,x[i], v0);
        idx[i] = i;
        //console.log(vpot[i])
    }
    return vpot
    }
    getPotential(xmin,dx,ngrid,v0,vpot,x,leb,tgi,tt,idx, potensial_function = getVpot)
    //singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)
    //console.log(new Float32Array(initE))
    //console.log(energy_new)
    //console.log(initE1 - energy_new)
    
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

     Enew.innerHTML = energy_new;

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