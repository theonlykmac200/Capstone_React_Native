const fetchReading = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question, rating: 3 }),
      };
      const response = await fetch('https://tarotnative.herokuapp.com/', requestOptions);
      const data = await response.json(); 
      setReading(data);
    } catch (error) {
      console.error(error);
    }
  };
  