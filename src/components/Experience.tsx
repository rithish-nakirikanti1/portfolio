import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          <div className="relative">
            <div className="mb-8 md:mb-12">
              <div className="flex items-center mb-6">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="ml-8 md:ml-0 md:w-[calc(50%-3rem)] md:ml-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg md:hidden">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AWS Cloud & DevOps Intern</h3>
                    <p className="text-blue-400 font-medium">F13 Technologies</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">June 2025 - September 2025</span>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Designed and implemented a resilient cloud architecture distributed across{' '}
                      <span className="font-semibold text-blue-400">2 AWS regions</span> (ap-south-1 and us-east-1)
                      supporting production workloads for{' '}
                      <span className="font-semibold text-blue-400">3 application environments</span>, ensuring rapid
                      disaster recovery with a{' '}
                      <span className="font-semibold text-blue-400">10-minute recovery time objective</span> and
                      5-minute data recovery window through DNS failover configuration and cross-region database
                      replication.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Built a complete three-tier cloud infrastructure consisting of{' '}
                      <span className="font-semibold text-cyan-400">6 EC2 instances</span>,{' '}
                      <span className="font-semibold text-cyan-400">2 load balancers</span>,{' '}
                      <span className="font-semibold text-cyan-400">1 relational database cluster</span>, and
                      distributed object storage, enabling secure separation between presentation, application, and
                      database layers while improving application reliability and performance.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Containerized web applications using Docker images and orchestrated deployments through{' '}
                      <span className="font-semibold text-blue-400">Amazon EKS Kubernetes clusters</span> running{' '}
                      <span className="font-semibold text-blue-400">12+ pods</span>, enabling scalable container
                      workloads capable of handling increased traffic demands and automated rolling updates.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Developed and configured automated CI/CD pipelines using{' '}
                      <span className="font-semibold text-cyan-400">Jenkins</span> integrating Git repositories,
                      container build automation, and Kubernetes deployment workflows, enabling application releases to
                      be executed in{' '}
                      <span className="font-semibold text-cyan-400">under 5 minutes</span> across development and
                      staging environments.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Automated provisioning of complete infrastructure environments including VPC networks,{' '}
                      <span className="font-semibold text-blue-400">8 subnets</span>, security groups, IAM roles, and
                      routing policies using{' '}
                      <span className="font-semibold text-blue-400">Terraform and AWS CloudFormation</span>, ensuring
                      consistent infrastructure builds across multiple deployment stages.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Implemented Auto Scaling policies managing up to{' '}
                      <span className="font-semibold text-cyan-400">10 compute instances</span> combined with
                      real-time monitoring through AWS CloudWatch, enabling proactive system monitoring, automated
                      resource scaling, and maintaining service uptime across application workloads.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Strengthened cloud security posture by implementing least-privilege IAM policies for{' '}
                      <span className="font-semibold text-blue-400">15+ service roles</span>, configuring private
                      network architecture, enabling encrypted storage replication, and applying secure cluster access
                      policies to protect application environments.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="text-gray-200 leading-relaxed">
                      Established application monitoring and logging pipelines capturing over{' '}
                      <span className="font-semibold text-cyan-400">50 performance metrics</span> and system logs,
                      enabling rapid detection of operational issues and reducing mean time to resolution during
                      infrastructure incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
