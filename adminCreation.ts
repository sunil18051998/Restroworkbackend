import payload from "payload";
import payloadConfig from "./src/payload.config";

const createAdmin = async () => {
  await payload.init({
    config: payloadConfig,
  });

  // Replace with your Users collection slug (default is "users")
  const Users = "users";

  // Check if an admin already exists
  const existingAdmins = await payload.find({
    collection: Users,
    where: {
      email: {
        equals: "mauryasunilkumar98@gmail.com",
      },
    },
  });

  if (existingAdmins.totalDocs === 0) {
    await payload.create({
      collection: Users,
      data: {
        email: "mauryasunilkumar98@gmail.com",
        password: "sunil1805",
        role: "admin", // depending on your access control setup
      },
    });
    console.log("✅ Admin account created:");
  } else {
    console.log("⚡ Admin already exists");
  }
};

createAdmin();
