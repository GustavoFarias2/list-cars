<h1 align='center'>
  list-cars
</h1>

<h3 align='center'>
  A simple aplication to consume an API
</h3>

---

## 🔧 How to use

- First clone the project

  `
    git clone http://github.com/GustavoFarias2/list-cars
  `

- Install dependencies

  `
    yarn
  `

- Run the project with Expo

  `
    expo start
  `
- Enter in the aplication with Expo app 

  `
    You can find it on AppStore or on Googleplay
  `

    <a href="https://apps.apple.com/br/app/expo-client/id982107779" target="_blank">
      App Store
    </a>
    <br>
    <a href="https://play.google.com/store/apps/details?id=host.exp.exponent" target="_blank">
      Google play 
    </a>
  


## ⚙️ Configuration Files

- Car type

      ./src/types/car.tsx

- Set URL

      ./src/services/api.tsx

- Entry point

      ./


## ⚡ Hooks

- useFetch(), used to fetch data from server

      params:

      url: String

- useValidate(), used to validate a form before execute certain action

      params:

      formRef: React.MutableRefObject<FormHandles>,     <- form reference
      form: Car,                                        <- new values
      data: Car[],                                      <- array to be updated  
      mutate: any,                                      <- mutate function
      callback: () => void                              <- fucntion executed before validation (if validated)

---

## 🎥 Preview

<p align="center">
  <img src="https://github.com/GustavoFarias2/ReadMeImages/blob/master/list-cars/listcar.png" />
  <img src="https://github.com/GustavoFarias2/ReadMeImages/blob/master/list-cars/viewcar.png" />
  <img src="https://github.com/GustavoFarias2/ReadMeImages/blob/master/list-cars/addcar.png" />
</p>



## 😉 Contact

Wanna help? You can send mensages to me on my email!

[![Gmail Badge](https://img.shields.io/badge/-gustavo.fariassiqueira@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavo.fariassiqueira@gmail.com)](mailto:gustavo.fariassiqueira@gmail.com)
