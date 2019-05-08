import Student from '../../../models/student'


function createStudentRoutes(server){
    console.log("Registrando usuarios");
    server.route([
        {
            method:'GET',
            path:'/api/v1/students',
            handler: function(request, repply){
                return Student.find();
            }
        },
        {
            method:'GET',
            path:'/api/v1/students/findOne',
            handler: function(request, repply){
                if (request.query){
                    const {name}=request.query;
                    return Student.find({name});
                }
                return Student.find();
            }
        },
        {
            method:'POST',
            path:'/api/v1/students',
            handler: function(request, repply){
                const {name, lastname, hobbie}=request.payload;
                const student = new Student({name, lastname, hobbie});
                return student.save();
            } 
        }
    ])
}

export default createStudentRoutes