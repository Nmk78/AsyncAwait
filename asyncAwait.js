let instanct = () => {
      console.log('first log revaled');

}

let two = () => {
      setTimeout(() => {
            console.log('two seconds revaled');
      }, 2000);
}

let three = () => {
      setTimeout(() => {
            console.log('three seconds revaled');
      }, 3000);
}

let five = () => {
      setTimeout(() => {
            console.log('five seconds revaled');
      }, 5000);
}

let six = () => {
      setTimeout(() => {
            console.log('five seconds revaled');
      }, 6000);
}

let syncronyousFn = async () => {
      try {
            await instanct()
            await(two())
            await(three())
            await(five())   
            await(six())   
      } catch (err) {
            console.log(err);
      }
}

syncronyousFn();