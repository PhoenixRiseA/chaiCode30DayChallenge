async function main() {
    // task 1 and 3: Understanding promises
    const promise1 = new Promise((resolve, reject) => {
      // const timer = setTimeout(() => {
      //     resolve("Resolved after 2 seconds")
      // }, (2000));
      const timer = setTimeout(() => {
        reject("Reject after 2 seconds");
      }, 2000);
    });
    try {
      const msg = await promise1;
      console.log(msg);
    } catch (error) {
      console.log(error);
    }
  
    // task 2: Chaining promsies
  
    function fetchData(url) {
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve(`Resolve data from ${url}`)
          },1000)
      })
    };
    const urls = ['server1.com/data1', 'server2.com/data2', 'server3.com/data3'];
  
    fetchData(urls[0]).then((data)=>{
      console.log(data);
      return fetchData(urls[1]);
    }).then((data)=>{
      console.log(data);
      return fetchData(urls[2]);
    }).then((data)=>{
      console.log(data);
    });
    fetch("https://api.freeapi.app/api/v1/public/randomusers").then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log("fetch using then ",data)
    }).catch((error)=>console.log(error))
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers");
      const data = await res.json();
      console.log("In fetch api using await",data);
    } catch (error) {
      console.log(error)
    }
    
    Promise.all([fetchData(urls[0]),fetchData(urls[1]),fetchData(urls[2])]).then((data)=>{
      console.log("in promise all",data);
    });
    Promise.race([fetchData(urls[0]),fetchData(urls[1]),fetchData(urls[2])]).then((data)=>{
      console.log("in promise race",data,"end");
    });
  
  }
  main();
  