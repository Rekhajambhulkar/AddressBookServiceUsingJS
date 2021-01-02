class AddressBook {
    id;
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
  
    constructor(id,firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.id = id;    
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }
  
    get id() { return this.id }
    set newId(id) {
      if (validateId(id)) {
          this.id = id;
      } else {
          throw "ID is not valid";
      }
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
        return "\nId :" +this.id+ " \nFirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
  }
  
  //UC1 Add Contacts in addressBook
  console.log("Welcome to the AddressBookService Application")
  
  let addressBook1 = new AddressBook(1,"Rekha", "Jambhulkar", "Talegaon", "Pune", "Maharashtra", 41007, 9139124143, "rekha12@gmail.com");
  console.log(addressBook1.toString())
  
  
  //UC2 - ensure Valid Contacts in AddressBook
  try {
      addressBook1.fName = "Ri";
      console.log(addressBook1.toString());
  } catch (e) {
      console.error(e);
  }
  
  //UC3
  let addressBookArray = new Array();
  addressBookArray.push(addressBook1);
  let addressBook2 = new AddressBook(2, "Aarav", "Pawar", "kothrud", "Pune", "Maharashtra", 411052, 9877457845, "aaravpawar@gmail.com");
  addressBookArray.push(addressBook2);
  console.log("\n--------Display contacts--------");
  console.log(addressBookArray)
  
  //UC4
const prompt = require('prompt-sync')({sigint: true});

function updateRecords(){
    let uInput = prompt("Enter Firstname to Update contacts:")
    addressBookArray.forEach(AddressBook => {
        if(AddressBook.firstName == uInput){
            console.log("\n Contact found!");
            status = true;
        console.log("1. Update ID" +
                    "\n2. Update First Name" +
                    "\n3. Update Last Name" +
                    "\n4. Update Address" +
                    "\n5. Update City" +
                    "\n6. Update State" +
                    "\n7. Update Zip" +
                    "\n8. Update Monile Number" +
                    "\n9. Update Email" +
                    "\nPress any key to Exit")
        var option = prompt("Enter number to select option: ");
        switch (option) {
                case "1":
                    newId = prompt("Enter New Id:");
                    AddressBook.id = newId;
                    console.log(AddressBook.toString());
                    console.log("\nId Updated Successfully!\n");
                    break;
                case "2":
                    newFirstName = prompt("Enter new Firstname:");
                    AddressBook.firstName = newFirstName;
                    console.log(AddressBook.toString());
                    console.log("\nFirstname updated Successfully\n");   
                    break; 
                case "3":
                    newLastName = prompt("Enter new Lastname:");
                    AddressBook.lastName = newLastName;
                    console.log(AddressBook.toString());
                    console.log("\nlastname updated Successfully\n");   
                case "4":
                    newAddress = prompt("Enter new Address:");
                    AddressBook.address = newAddress;
                    console.log(AddressBook.toString());
                    console.log("Address updated Successfully");
                    break; 
                case "5":
                    newCity = prompt("Enter new city:");
                    AddressBook.city = newCity;
                    console.log(AddressBook.toString());
                    console.log("City updated Successfully");
                    break;
                case "6":                    
                    newState = prompt("Enter state:");
                    AddressBook.state = newState;
                    console.log(AddressBook.toString());
                    console.log("State Updated Successfully");
                    break;
                case "7":    
                    newZip = prompt("Enter new Zip:");
                    AddressBook.zip = newZip;
                    console.log(AddressBook.toString());
                    console.log("Zip updated Successfully");
                    break;
                case "8":    
                    newPhoneNumber = prompt("Enter new PhoneNumber:");
                    AddressBook.phoneNumber = newPhoneNumber;
                    console.log(AddressBook.toString());
                    console.log("phoneNumber updated Successfully");
                    break; 
                case "9":    
                    newEmailId = prompt("Enter new EmailId:");
                    AddressBook.phoneNumber = newEmailId;
                    console.log(AddressBook.toString());
                    console.log("newEmailId updated Successfully");
                    break;    
                default:
                    console.log("Invalid choice");    
                    break;
            }
        }
    });
    if (!status) {
        console.log("Contact not found !!!");
    }
}
updateRecords();