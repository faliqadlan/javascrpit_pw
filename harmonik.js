function submit() {
 let    xmin    = parseFloat(document.getElementById('xmin').value),
        xmax    = parseFloat(document.getElementById('xmax').value),
        dx      = parseFloat(document.getElementById('dx').value),

        v0      = parseFloat(document.getElementById('v0').value),
        om      = parseFloat(document.getElementById('omega').value);
        ef      = document.getElementById('ef');
var     initE   = parseFloat(document.getElementById('initE').value)

let x       = [],
    vpot    = [],
    idx     = [],
    efunction = [],
    vtemp   = [],
    iter    = 0,
    nloop   = 10,

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
    singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)
    //console.log(new Float32Array(initE))
    //console.log(energy_new)
    //console.log(initE1 - energy_new)
    
    while (initE - energy_new > 0) {
        initE = initE + ((initE - energy_new)/energy_new)
        console.log(initE)
        singleEigen(dx,ngrid,vpot,x,efunction,iter,nloop,initE,vtemp)
        console.log(energy_new)
    }

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

    // efunction.forEach((element,i,x) => {
    //     // console.log(element)
    //     datapoints1(i) = 
    // });

    var chart = new CanvasJS.Chart("chartContainer", {
  title: {
    text: "Data Plotted from Array"
  },
  axisX: {
    title: "Axis X Title"
  },
  axisY: {
    title: "Units"
  },
  data: [{
    type: "line",
    dataPoints: efunction
  }]
});
    

     Enew.innerHTML = energy_new;
}