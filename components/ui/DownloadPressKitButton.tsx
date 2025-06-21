"use client";
import { Button } from "@/components/client/button";
import { ArrowRight } from "lucide-react";

interface Projeto {
  titulo: string;
  descricao: string;
  cliente: string;
  link: string;
  midias?: string[];
  destaque?: boolean;
}

interface Depoimento {
  nome: string;
  cargo: string;
  foto: string;
  comentario: string;
}

interface MembroEquipe {
  nome: string;
  cargo: string;
  bio: string;
}

interface Props {
  empresa: {
    nome: string;
    site: string;
    apresentacao: string;
    contato: string;
    telefone: string;
    local: string;
  };
  servicos: string[];
  projetos: Projeto[];
  depoimentos: Depoimento[];
  equipe?: MembroEquipe[];
}

export default function DownloadPressKitButton({ empresa, servicos, projetos, depoimentos, equipe = [] }: Props) {
  async function gerarPDF() {
    const jsPDF = (await import("jspdf")).default;
    const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });

    // --- CARREGAR FONTE PERSONALIZADA ---
    try {
      const fontUrl = '/NotoSans-Regular.ttf'; // Caminho para a fonte na pasta public
      const fontBytes = await fetch(fontUrl).then(res => {
        if (!res.ok) throw new Error('Não foi possível carregar a fonte.');
        return res.arrayBuffer();
      });

      // Converte a fonte para um formato que o jsPDF entende
      const fontBase64 = btoa(new Uint8Array(fontBytes).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      
      doc.addFileToVFS('NotoSans-Regular.ttf', fontBase64);
      doc.addFont('NotoSans-Regular.ttf', 'NotoSans', 'normal');
      doc.setFont('NotoSans'); // Define NotoSans como a fonte padrão para todo o documento
    } catch (error) {
      console.error("Erro ao carregar a fonte Noto Sans. Usando fonte padrão.", error);
    }
    
    const page = { width: doc.internal.pageSize.getWidth(), height: doc.internal.pageSize.getHeight() };
    const logoCompletaImg = "/logo-completa.png";
    let currentPage = 1;

    const projectsPages = Math.ceil(projetos.length / 4);
    const testimonialsPages = Math.ceil(depoimentos.length / 3);
    const hasCaseStudy = projetos.length > 0;
    const hasTeam = equipe.length > 0;
    const totalPages = 1 + 1 + (hasCaseStudy ? 1 : 0) + (hasTeam ? 1 : 0) + projectsPages + testimonialsPages + 1; // Capa, Serviços, Estudo de Caso, Equipe, Projetos, Depoimentos, Contato

    const addHeader = (pageTitle: string) => {
      doc.addImage(logoCompletaImg, "PNG", 40, 30, 100, 0);
      doc.setFontSize(14);
      doc.setTextColor(200);
      doc.text(pageTitle, page.width - 40, 55, { align: "right" });
      doc.setDrawColor(50);
      doc.line(40, 80, page.width - 40, 80);
    };

    const addFooter = () => {
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(`© ${new Date().getFullYear()} ${empresa.nome}`, 40, page.height - 30);
      doc.text(`Página ${currentPage} de ${totalPages}`, page.width - 40, page.height - 30, { align: "right" });
      currentPage++;
    };
    
    const newPage = () => {
      doc.addPage("a4", "landscape");
      doc.setFillColor(24, 24, 27);
      doc.rect(0, 0, page.width, page.height, "F");
    }

    doc.setFillColor(24, 24, 27);
    doc.rect(0, 0, page.width, page.height, "F");
    doc.addImage(logoCompletaImg, "PNG", page.width/2 - 150, 150, 300, 0);
    doc.setFontSize(20);
    doc.setTextColor(255);
    doc.text("Press Kit & Portfólio", page.width / 2, 320, { align: "center" });
    doc.setFontSize(16);
    doc.text("Quem Somos", 100, 400);
    doc.setFontSize(12);
    doc.setTextColor(200);
    doc.text(empresa.apresentacao, 100, 420, { maxWidth: page.width - 200 });
    addFooter();

    newPage();
    addHeader("Nossos Serviços");
    let yPos = 140;
    const serviceIcons: { [key: string]: string } = {
        "websites": "🌐", "design": "🎨", "social": "📱", "media": "🎬"
    };
    servicos.forEach(servico => {
        const iconKey = servico.split(" ")[0].toLowerCase();
        const icon = serviceIcons[iconKey] || "•";
        doc.setFillColor(39, 39, 42);
        doc.roundedRect(60, yPos - 20, page.width - 120, 40, 10, 10, "F");
        doc.setFontSize(14);
        doc.setTextColor(255);
        doc.text(`${icon} ${servico}`, 80, yPos + 5);
        yPos += 60;
    });
    addFooter();

    if (hasCaseStudy) {
      const caseStudyProject = projetos[0];
      newPage();
      addHeader("Estudo de Caso: " + caseStudyProject.cliente);
      yPos = 120;
      doc.setFontSize(16).setTextColor(255).text(caseStudyProject.titulo, 60, yPos);
      yPos += 40;
      doc.setFontSize(12).setTextColor(200).text("O Desafio:", 60, yPos);
      doc.setFontSize(11).setTextColor(180).text("Aqui você descreveria o problema ou a necessidade que o cliente apresentou. Por exemplo: 'O cliente precisava de uma nova identidade visual e um website moderno para aumentar sua presença online e gerar mais leads.'", 80, yPos + 20, { maxWidth: page.width - 160 });
      yPos += 80;
      doc.setFontSize(12).setTextColor(200).text("Nossa Solução:", 60, yPos);
      doc.setFontSize(11).setTextColor(180).text("Detalhe a estratégia e as ações implementadas. Ex: 'Desenvolvemos um branding completo, seguido por um site responsivo com foco em UX e uma estratégia de SEO para ranqueamento.'", 80, yPos + 20, { maxWidth: page.width - 160 });
      yPos += 80;
      doc.setFontSize(12).setTextColor(200).text("Resultados:", 60, yPos);
      doc.setFontSize(11).setTextColor(180).text("Apresente os resultados quantitativos e qualitativos. Ex: 'Aumento de 200% no tráfego orgânico em 6 meses e um crescimento de 35% na geração de leads qualificados.'", 80, yPos + 20, { maxWidth: page.width - 160 });
      addFooter();
    }
    
    if (hasTeam) {
        newPage();
        addHeader("Nossa Equipe");
        yPos = 140;
        equipe.forEach(membro => {
            doc.setFillColor(39, 39, 42);
            doc.roundedRect(60, yPos - 20, page.width - 120, 80, 10, 10, "F");
            doc.setFontSize(14).setTextColor(255).text(membro.nome, 80, yPos);
            doc.setFontSize(11).setTextColor(200).text(membro.cargo, 80, yPos + 20);
            doc.setFontSize(10).setTextColor(180).text(membro.bio, 80, yPos + 40, { maxWidth: page.width - 180 });
            yPos += 100;
        });
        addFooter();
    }

    const projetosPorPagina = 4;
    for (let i = 0; i < projetos.length; i += projetosPorPagina) {
      newPage();
      addHeader("Portfólio de Projetos");
      const chunk = projetos.slice(i, i + projetosPorPagina);
      yPos = 120;
      chunk.forEach(proj => {
        doc.setFillColor(39, 39, 42);
        doc.roundedRect(60, yPos - 20, page.width - 120, 80, 10, 10, "F");
        doc.setFontSize(14).setTextColor(255).text(proj.titulo, 80, yPos);
        doc.setFontSize(10).setTextColor(200).text(proj.descricao, 80, yPos + 20, { maxWidth: page.width - 200 });
        doc.setTextColor(150).text(`Cliente: ${proj.cliente}`, 80, yPos + 45);
        yPos += 100;
      });
      addFooter();
    }

    const depoimentosPorPagina = 3;
     for (let i = 0; i < depoimentos.length; i += depoimentosPorPagina) {
      newPage();
      addHeader("O Que Nossos Clientes Dizem");
      const chunk = depoimentos.slice(i, i + depoimentosPorPagina);
      yPos = 130;
      chunk.forEach(dep => {
        doc.setFillColor(39, 39, 42);
        doc.roundedRect(60, yPos - 20, page.width - 120, 100, 10, 10, "F");
        doc.setFontSize(11).setTextColor(220).text(`"${dep.comentario}"`, 80, yPos + 10, { maxWidth: page.width - 200 });
        doc.setFontSize(10).setTextColor(180).text(`- ${dep.nome}, ${dep.cargo}`, 80, yPos + 70);
        yPos += 120;
      });
      addFooter();
    }
    
    newPage();
    addHeader("Vamos Conversar?");
    doc.setFontSize(22).setTextColor(255).text("Pronto para começar seu próximo projeto?", page.width / 2, 200, { align: "center"});
    yPos = 280;
    doc.setFontSize(16).setTextColor(255).text("📧 E-mail", 150, yPos);
    doc.setFontSize(14).setTextColor(200).text(empresa.contato, 150, yPos + 25);
    yPos += 80;
    doc.setFontSize(16).setTextColor(255).text("📱 WhatsApp", 150, yPos);
    doc.setFontSize(14).setTextColor(200).text(empresa.telefone, 150, yPos + 25);
    yPos += 80;
    doc.setFontSize(16).setTextColor(255).text("🌐 Website", 150, yPos);
    doc.setFontSize(14).setTextColor(200).text(empresa.site, 150, yPos + 25);
    addFooter();

    doc.save("WootaStudio_PressKit_Completo.pdf");
  }

  return (
    <Button
      className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2 rounded-full text-sm border-2 border-white shadow-md focus:ring-2 focus:ring-white"
      onClick={gerarPDF}
    >
      Baixar Press Kit (PDF)
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
} 