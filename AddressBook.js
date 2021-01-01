console.log("Welcome to the AddressBookService")
class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    
    get firstName(){return this._firstname;}
  set fName(firstname){
      let fnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
      if(fnRegex.test(firstname)){
          this._firstname=firstname;
      }else{
          throw 'Invalid firstname';
      }
  }

  get lastName() {
      return this._lastName;
  }
  set lName(lastName) {
      let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
      if(lastNameRegex.test(lastName))
      this._lastName = this.lastName;
      else throw 'Last Name is Incorrect !';
  }

  get address() {
      return this._address;
  }
  set addr(address) {
      let addressRegex = RegExp('[A-Za-z]{4,}$');
      if(addressRegex.test(address))
      this._address = this.address;
      else throw 'Address is Incorrect !';
  }

  get city() {
      return this._city;
  }
  set city(city) {
      let cityRegex = RegExp('[A-Za-z]{4,}$');
      if(cityRegex.test(city))
      this._city = city;
      else throw 'City is Incorrect !';
  }

  get state() {
      return this._state;
  }
  set state(state) {
      let stateRegex = RegExp('[A-Za-z]{4,}$');
      if(stateRegex.test(state))
      this._state = state;
      else throw 'State is Incorrect !';
  }

  get zip() {
      return this._zip;
  }
  set zip(zip) {
      let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
      if(zipRegex.test(zip))
      this._zip = zip;
      else throw 'zip is Incorrect !';
  }

  get phoneNumber() {
      return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
      let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
      if(phoneNumberRegex.test(phoneNumber))
      this._phoneNumber = this.phoneNumber;
      else throw 'Phone Number is Incorrect !';
  }

  get email() {
      return this._email;
  }
  set email(email) {
      let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
      if(emailRegex.test(email))
      this._email = this.email;
      else throw 'Email is Incorrect !';
  }

  toString() {
      return "\nFirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
      "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
      "\nemail : " +this.email;
  }
}
console.log("\nAdd Contacts")

let addressBook1 = new AddressBook("Rekha", "Jambhulkar", "Talegaon", "Pune", "Maharashtra", 41007, 9139124143, "rekha12@gmail.com");
let addressBook2 = new AddressBook("Riya", "Thakur", "kothrud", "Pune", "Maharashtra", 411023, 9855642456, "riya@gmail.com");
let addressBook3 = new AddressBook("Aarav", "kakade", "Pimapri", "Pune", "Maharashtra", 454641, 95876412, "aarav@gmail.com");

//UC2
try {
    addressBook1.fName = "ne";
    console.log(addressBook1.toString());
} catch (e) {
    console.error(e);
}