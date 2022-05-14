var faker = require('faker')
faker.locale = 'pt_BR'

export default {

    massaLog: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName}`,
            lastName: `${lastName}`,
            email: faker.internet.email(),
            password: faker.internet.password(),
            street: faker.address.streetName(),
            city: faker.address.city(),
            homePhone: faker.phone.phoneNumber(),
            mobileFone: faker.phone.phoneNumber(),
            alternativeAdress: faker.address.streetName(),

        }
        return data
    }

}
