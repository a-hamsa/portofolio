const Projects = () => (
    <section className="container mx-auto my-16 p-8" id="projects">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="mt-4">Description of your project goes here.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="mt-4">Description of your project goes here.</p>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  