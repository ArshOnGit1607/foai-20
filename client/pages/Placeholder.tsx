import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  icon: string;
  description: string;
}

export default function Placeholder({ title, icon, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="text-8xl mb-8">{icon}</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>

          <div className="bg-blue-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Continue building this page in the chat.</strong>
            </p>
            <p className="text-xs text-gray-600">
              Just describe what you'd like to see here - features, layout, content - and we'll create it for you!
            </p>
          </div>

          <Link
            to="/"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
