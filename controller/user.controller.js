import prisma from '../db/db.config.js';



// fetching single record

export const getSingleUser = async (req, res)=>{
    
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where:{
            id: Number(userId)
        }
    })

    return res.json({ status: 200 , data : user});

}




// get all users:

export const getAllUsers = async ( req, res)=>{

    const users = await prisma.user.findMany({});

    return res.json({
        status:200,
        user: users,
        message:"Users fetched"
    })
}
  

export const createUser = async (req, res)=>{

    const {name, email, password} = req.body;

    const findUser = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if(findUser){
        return res.json({status: 400, message:"Email already exists"})
    }


    const newUser = await prisma.user.create({
        data:{
            name: name,
            email: email,
            password: password
        }
    })


    return res.json({
        status:200,
        data: newUser,
        message:"User created"
    })

}


// update user controller

export const updateUser = async (req, res)=>{
    const userId = req.params.id;
    const {name, email, password} = req.body;

    await prisma.user.update({
        where:{
            id: Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    })


    return res.json({
        status:200,
        message:"User Updated"
    })
}



// delete single user

export const deleteUser = async (req, res)=>{
    const userId = req.params.id;
    await prisma.user.delete({
        where:{
            id: Number(userId)
        }
    })


    return res.json({
        status:200,
        message:"User Deleted"
    })}