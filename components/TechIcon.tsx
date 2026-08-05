import { 
  SiReact, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiWordpress, 
  SiElementor, 
  SiHtml5, 
  SiCss,
  SiPhp,
  SiFigma
} from 'react-icons/si';
import { Search, Gauge } from 'lucide-react';

const TECH_ICONS: Record<string, React.ReactNode> = {
  'PHP': <SiPhp className="w-3.5 h-3.5 text-[#777BB4]" />,
  'JavaScript': <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" />,
  'TypeScript': <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
  'HTML': <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  'HTML5': <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  'CSS': <SiCss className="w-3.5 h-3.5 text-[#1572B6]" />,
  'CSS3': <SiCss className="w-3.5 h-3.5 text-[#1572B6]" />,
  'WordPress': <SiWordpress className="w-3.5 h-3.5 text-[#21759B]" />,
  'Elementor': <SiElementor className="w-3.5 h-3.5 text-[#92003B]" />,
  'React': <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  'Tailwind CSS': <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  'Next.js': <SiNextdotjs className="w-3.5 h-3.5 text-text-main" />,
  'Figma': <SiFigma className="w-3.5 h-3.5 text-[#F24E1E]" />,
  'SEO': <Search className="w-3.5 h-3.5 text-emerald-400" />,
  'WPO': <Gauge className="w-3.5 h-3.5 text-accent" />,
};

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  return TECH_ICONS[name] || null;
}