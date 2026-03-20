import { Cloud, Container, Gauge, Server, Code, Shield, Network, Database, Boxes, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        'AWS (EC2, S3, RDS, Route 53, CloudFront, IAM, VPC, Lambda, CloudWatch, EKS, Auto Scaling)',
        'Azure (Virtual Machines, Blob Storage, App Services, Virtual Network, AKS)',
        'Multi-Region Architecture',
        'Cloud Cost Optimization',
        'Cloud Security & Compliance'
      ]
    },
    {
      title: 'DevOps & Automation',
      icon: GitBranch,
      skills: [
        'Docker & Containerization',
        'Kubernetes & EKS',
        'Terraform (IaC)',
        'Jenkins & CI/CD Pipelines',
        'GitHub Actions',
        'Helm Charts',
        'Ansible Automation',
        'GitOps (ArgoCD)',
        'Infrastructure as Code'
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Gauge,
      skills: [
        'Prometheus',
        'Grafana',
        'AWS CloudWatch',
        'Log Aggregation',
        'Performance Metrics',
        'Alert Management',
        'Distributed Tracing'
      ]
    },
    {
      title: 'Networking & Security',
      icon: Network,
      skills: [
        'VPC Architecture',
        'Load Balancers (ALB/NLB)',
        'DNS & Route 53',
        'Security Groups & NACLs',
        'IAM Policies',
        'SSL/TLS Certificates',
        'Network Isolation',
        'Zero Trust Architecture'
      ]
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: [
        'Amazon RDS',
        'Database Replication',
        'S3 Object Storage',
        'EBS Volumes',
        'Backup & Recovery',
        'Database Migration',
        'High Availability Design'
      ]
    },
    {
      title: 'Orchestration & Microservices',
      icon: Boxes,
      skills: [
        'Kubernetes Orchestration',
        'Service Mesh (Istio)',
        'Container Registry',
        'Pod Autoscaling',
        'Rolling Updates',
        'Blue-Green Deployment',
        'Canary Releases'
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      skills: [
        'IAM & RBAC',
        'Secrets Management',
        'Container Security',
        'Vulnerability Scanning',
        'Encryption (At-Rest & In-Transit)',
        'Security Hardening',
        'Compliance Automation'
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: Code,
      skills: [
        'Python',
        'Bash Scripting',
        'YAML',
        'JSON',
        'Linux Administration',
        'Automation Scripts',
        'API Integration'
      ]
    },
    {
      title: 'Operating Systems',
      icon: Server,
      skills: [
        'Linux (Ubuntu, CentOS)',
        'System Administration',
        'Process Management',
        'Package Management',
        'Performance Tuning',
        'Shell Scripting'
      ]
    }
  ];

  const expertiseAreas = [
    'DevOps Engineering',
    'Cloud Infrastructure',
    'AWS Architecture',
    'Kubernetes Orchestration',
    'Docker Containerization',
    'CI/CD Pipeline Automation',
    'Infrastructure as Code',
    'Terraform Automation',
    'Jenkins Pipelines',
    'Cloud Security Implementation',
    'Site Reliability Engineering',
    'Monitoring & Observability',
    'Linux Administration',
    'Cloud Disaster Recovery',
    'Microservices Deployment'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set in cloud infrastructure, DevOps practices, and modern application deployment
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
