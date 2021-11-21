class Weather {
  constructor(city) {
    this.apiKey = "5d05559e1db848b282793926211910";
    this.city = city;
    // this.state = state;
  }

  //   fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no
      `
    );

    const responseData = await response.json();

    return responseData;
  }

  // change weather location
  changeLocation(city) {
    this.city = city;
  }
}
