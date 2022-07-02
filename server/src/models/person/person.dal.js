import personSchema from "./person.schema";
import errorMessage from "../../error/error-message.js";

async function findAllPerson() {
  //SELECT * FROM person
  return personSchema.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}
async function findPerson(filterQueryObject) {
  //SELECT * FROM person WHERE col = condition
  return personSchema.findOne(filterQueryObject, {
    _id: 0,
    __v: 0,
  });
}

async function createPerson({ name, dob, email, address, phoneNo }) {
  try {
    //do stuff
    const personExists = await findPerson({ code });

    if (personExists) {
      throw new Error(`Person ${errorMessage.alreadyExist}`);
    }

    //INSERT INTO person(name,dob,email,address,phoneNo) VALUES(name,dob,email,address,phoneNo)
    const result = await personSchema.create({
      name,
      dob,
      email,
      address,
      phoneNo,
    });

    return {
      ok: 1,
      person: result,
    };
  } catch (err) {
    // if error throw the error to controller
    throw new Error(err.message);
  }
}

async function updatePerson(filterQueryObject, updatedDataObject) {
  try {
    const personExists = await findPerson(filterQueryObject);

    if (!personExists) {
      throw new Error(`Person ${errorMessage.notFound}`);
    }

    //UPDATE person SET col = updatedData WHERE col = condition
    const result = await personSchema.updateOne(
      filterQueryObject,
      updatedDataObject
    );

    return {
      ok: 1,
      person: result,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deletePerson(filterQueryObject) {
    try {
      const personExists = await findPerson(filterQueryObject);
  
      if (!personExists) {
        throw new Error(`Person ${errorMessage.notFound}`);
      }
  
      //DELETE FROM person WHERE col = condition
      const result = await personSchema.deleteOne(filterQueryObject);
  
      return {
        ok: 1,
        person: result,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

export {
    findAllPerson,
    findPerson,
    createPerson,
    updatePerson,
    deletePerson,
}