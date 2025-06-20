export default function TeamMember({ name, role, bio, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img 
        src={image} 
        alt={name} 
        className="mx-auto h-32 w-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
}