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
    git clone http://github.com/GustavoFarias2/list-carsa
  `

- Install dependencies

  `
    yarn
  `

- Run the project with Expo

  `
    expo start
  `
- Enter in the aplication with Expo app (you can find it on AppStore or on Googleplay)


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
  <img src="https://github.com/GustavoFarias2/ReadMeImages/blob/master/list-cars/addcar.png" />
  <img src="https://github.com/GustavoFarias2/ReadMeImages/blob/master/list-cars/viewcar.png" />
</p>



## 😉 Contact

Wanna help? You can send mensages to me on my email!

[![Gmail Badge](https://img.shields.io/badge/-gustavo.fariassiqueira@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavo.fariassiqueira@gmail.com)](mailto:gustavo.fariassiqueira@gmail.com)
