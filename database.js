let employees = [
    {
        id: 1,
        name: 'Alice',
        age: 30,
        position: 'Software Engineer',
        department: 'Development',
        salary: 70000,
        hireDate: '2015-08-01',
        performanceRating: 4.5,
        address: {street: '123 Main St', city: 'San Francisco', state: 'CA', zip: '94101'},
        contact: {phone: '555-1234', email: 'alice@example.com'},
        projects: ['Project A', 'Project B']
    },
    {
        id: 2,
        name: 'Bob',
        age: 45,
        position: 'Project Manager',
        department: 'Development',
        salary: 90000,
        hireDate: '2010-06-15',
        performanceRating: 4.7,
        address: {street: '456 Oak St', city: 'Los Angeles', state: 'CA', zip: '90001'},
        contact: {phone: '555-5678', email: 'bob@example.com'},
        projects: ['Project C']
    },
    {
        id: 3,
        name: 'Charlie',
        age: 28,
        position: 'Data Analyst',
        department: 'Development',
        salary: 65000,
        hireDate: '2018-01-22',
        performanceRating: 4.2,
        address: {street: '789 Pine St', city: 'Seattle', state: 'WA', zip: '98101'},
        contact: {phone: '555-8765', email: 'charlie@example.com'},
        projects: ['Project D']
    },
    {
        id: 4,
        name: 'David',
        age: 35,
        position: 'UI/UX Designer',
        department: 'Development',
        salary: 72000,
        hireDate: '2017-03-15',
        performanceRating: 4.4,
        address: {street: '101 Elm St', city: 'Austin', state: 'TX', zip: '73301'},
        contact: {phone: '555-4321', email: 'david@example.com'},
        projects: ['Project E', 'Project F']
    },
    {
        id: 5,
        name: 'Eve',
        age: 40,
        position: 'HR Specialist',
        department: 'Human Resources',
        salary: 68000,
        hireDate: '2016-11-03',
        performanceRating: 4.3,
        address: {street: '202 Maple St', city: 'Denver', state: 'CO', zip: '80201'},
        contact: {phone: '555-9876', email: 'eve@example.com'},
        projects: ['Project G']
    },
    {
        id: 6,
        name: 'Frank',
        age: 29,
        position: 'Marketing Coordinator',
        department: 'Marketing',
        salary: 62000,
        hireDate: '2019-09-21',
        performanceRating: 4.1,
        address: {street: '303 Birch St', city: 'New York', state: 'NY', zip: '10001'},
        contact: {phone: '555-6543', email: 'frank@example.com'},
        projects: ['Project H']
    },
    {
        id: 7,
        name: 'Grace',
        age: 33,
        position: 'Sales Manager',
        department: 'Sales',
        salary: 75000,
        hireDate: '2014-12-09',
        performanceRating: 4.6,
        address: {street: '404 Cedar St', city: 'Chicago', state: 'IL', zip: '60601'},
        contact: {phone: '555-3210', email: 'grace@example.com'},
        projects: ['Project I']
    },
    {
        id: 8,
        name: 'Hank',
        age: 37,
        position: 'Product Owner',
        department: 'Product',
        salary: 82000,
        hireDate: '2012-07-18',
        performanceRating: 4.8,
        address: {street: '505 Walnut St', city: 'Boston', state: 'MA', zip: '02101'},
        contact: {phone: '555-1098', email: 'hank@example.com'},
        projects: ['Project J']
    },
    {
        id: 9,
        name: 'Ivy',
        age: 26,
        position: 'DevOps Engineer',
        department: 'Development',
        salary: 71000,
        hireDate: '2020-05-20',
        performanceRating: 4.3,
        address: {street: '606 Oak St', city: 'San Jose', state: 'CA', zip: '95101'},
        contact: {phone: '555-5647', email: 'ivy@example.com'},
        projects: ['Project K']
    },
    {
        id: 10,
        name: 'Jack',
        age: 41,
        position: 'Finance Analyst',
        department: 'Finance',
        salary: 73000,
        hireDate: '2013-10-11',
        performanceRating: 4.2,
        address: {street: '707 Pine St', city: 'Philadelphia', state: 'PA', zip: '19101'},
        contact: {phone: '555-3456', email: 'jack@example.com'},
        projects: ['Project L']
    },
    {
        id: 11,
        name: 'Karen',
        age: 31,
        position: 'Legal Counsel',
        department: 'Legal',
        salary: 78000,
        hireDate: '2016-04-29',
        performanceRating: 4.4,
        address: {street: '808 Maple St', city: 'San Diego', state: 'CA', zip: '92101'},
        contact: {phone: '555-6789', email: 'karen@example.com'},
        projects: ['Project M']
    },
    {
        id: 12,
        name: 'Leo',
        age: 32,
        position: 'Customer Support Manager',
        department: 'Support',
        salary: 65000,
        hireDate: '2018-12-01',
        performanceRating: 4.1,
        address: {street: '909 Cedar St', city: 'Seattle', state: 'WA', zip: '98102'},
        contact: {phone: '555-7890', email: 'leo@example.com'},
        projects: ['Project N']
    },
    {
        id: 13,
        name: 'Mia',
        age: 27,
        position: 'Content Writer',
        department: 'Development',
        salary: 62000,
        hireDate: '2019-06-22',
        performanceRating: 4.0,
        address: {street: '1010 Birch St', city: 'Portland', state: 'OR', zip: '97201'},
        contact: {phone: '555-8901', email: 'mia@example.com'},
        projects: ['Project O']
    },
    {
        id: 14,
        name: 'Nathan',
        age: 38,
        position: 'Operations Manager',
        department: 'Operations',
        salary: 80000,
        hireDate: '2011-03-14',
        performanceRating: 4.7,
        address: {street: '1111 Main St', city: 'Dallas', state: 'TX', zip: '75201'},
        contact: {phone: '555-9012', email: 'nathan@example.com'},
        projects: ['Project P']
    },
    {
        id: 15,
        name: 'Olivia',
        age: 34,
        position: 'Business Analyst',
        department: 'Development',
        salary: 71000,
        hireDate: '2015-08-30',
        performanceRating: 4.5,
        address: {street: '1212 Elm St', city: 'San Antonio', state: 'TX', zip: '78201'},
        contact: {phone: '555-0123', email: 'olivia@example.com'},
        projects: ['Project Q']
    },
    {
        id: 16,
        name: 'Paul',
        age: 29,
        position: 'Research Scientist',
        department: 'R&D',
        salary: 69000,
        hireDate: '2019-02-17',
        performanceRating: 4.3,
        address: {street: '1313 Oak St', city: 'San Francisco', state: 'CA', zip: '94102'},
        contact: {phone: '555-1235', email: 'paul@example.com'},
        projects: ['Project R']
    },
    {
        id: 17,
        name: 'Quinn',
        age: 26,
        position: 'Graphic Designer',
        department: 'Design',
        salary: 65000,
        hireDate: '2020-07-25',
        performanceRating: 4.1,
        address: {street: '1414 Pine St', city: 'Los Angeles', state: 'CA', zip: '90002'},
        contact: {phone: '555-2345', email: 'quinn@example.com'},
        projects: ['Project S']
    },
    {
        id: 18,
        name: 'Rachel',
        age: 42,
        position: 'Supply Chain Manager',
        department: 'Operations',
        salary: 74000,
        hireDate: '2012-05-12',
        performanceRating: 4.6,
        address: {street: '1515 Birch St', city: 'Chicago', state: 'IL', zip: '60602'},
        contact: {phone: '555-3457', email: 'rachel@example.com'},
        projects: ['Project T']
    },
    {
        id: 19,
        name: 'Steve',
        age: 37,
        position: 'Technical Writer',
        department: 'Content',
        salary: 67000,
        hireDate: '2017-11-19',
        performanceRating: 4.2,
        address: {street: '1616 Maple St', city: 'New York', state: 'NY', zip: '10002'},
        contact: {phone: '555-4567', email: 'steve@example.com'},
        projects: ['Project U']
    },
    {
        id: 20,
        name: 'Tina',
        age: 31,
        position: 'Quality Assurance Engineer',
        department: 'Development',
        salary: 68000,
        hireDate: '2018-04-23',
        performanceRating: 4.3,
        address: {street: '1717 Cedar St', city: 'San Jose', state: 'CA', zip: '95102'},
        contact: {phone: '555-5679', email: 'tina@example.com'},
        projects: ['Project V']
    }
];

module.exports = {
    employees
}