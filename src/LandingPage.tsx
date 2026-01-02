const LandingPage = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white font-helvetica">
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Header */}
        <header className="border-b-4 border-white pb-8 mb-10">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase mb-2.5 bg-white text-black py-4 px-5 inline-block">
            AI POC
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-5 tracking-wide">
            AI Agent Integration with Azure DevOps
          </p>
        </header>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 py-2.5 px-4 bg-white text-black inline-block tracking-wide">
            Overview
          </h2>
          <p className="text-lg mb-4">
            This Proof of Concept demonstrates the integration of intelligent AI agents with Azure DevOps
            to streamline development workflows, automate code reviews, and enhance team productivity.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 py-2.5 px-4 bg-white text-black inline-block tracking-wide">
            Key Features
          </h2>
          <ul className="list-none mt-5">
            {[
              'Automated code analysis and review using AI-powered agents',
              'Seamless integration with Azure DevOps work items and pull requests',
              'Intelligent task assignment and workflow optimization',
              'Real-time insights and recommendations for code quality',
              'Automated documentation generation and updates',
            ].map((feature, index) => (
              <li
                key={index}
                className="py-4 border-b border-gray-600 last:border-b-0 text-lg relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:bg-white before:rounded-full before:border-[3px] before:border-black"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* POC Scope */}
        <section className="mb-12">
          <div className="bg-yellow-400 text-black p-5 border-4 border-black">
            <h3 className="text-2xl mb-2.5 uppercase font-bold">POC Scope</h3>
            <p className="font-bold">
              This proof of concept validates the feasibility of AI-driven automation in enterprise
              development environments. The integration focuses on reducing manual overhead while
              maintaining code quality and security standards.
            </p>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 py-2.5 px-4 bg-white text-black inline-block tracking-wide">
            Technology Stack
          </h2>
          <p className="text-lg">
            <strong>Azure DevOps:</strong> Work item tracking, repositories, and CI/CD pipelines
            <br />
            <strong>AI Agents:</strong> Natural language processing and code analysis
            <br />
            <strong>Integration Layer:</strong> REST APIs and webhooks for seamless communication
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 py-2.5 px-4 bg-white text-black inline-block tracking-wide">
            Benefits
          </h2>
          <ul className="list-none mt-5">
            {[
              'Potentially reduce code review time by up to 60%',
              'Improve code quality through consistent AI-driven analysis',
              'Accelerate development cycles with automated workflows',
              'Enable developers to focus on high-value tasks',
            ].map((benefit, index) => (
              <li
                key={index}
                className="py-4 border-b border-gray-600 last:border-b-0 text-lg relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:bg-white before:rounded-full before:border-[3px] before:border-black"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Status */}
        <section className="mb-12">
          <div className="bg-yellow-400 text-black p-5 border-4 border-black">
            <h3 className="text-2xl mb-2.5 uppercase font-bold">Status</h3>
            <p className="font-bold">
              This POC is currently in the initial development phase. The landing page serves as
              the entry point for understanding the project scope and objectives.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-white pt-8 mt-16 text-center text-sm">
          <p>&copy; {year} AI POC for IPG - Azure DevOps Integration</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
