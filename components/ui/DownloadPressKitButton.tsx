"use client";
import { Button } from "@/components/ui/button";
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
}

export default function DownloadPressKitButton({ empresa, servicos, projetos, depoimentos }: Props) {
  async function gerarPDF() {
    const jsPDF = (await import("jspdf")).default;
    const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    // Capa
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, 595, 842, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.text(empresa.nome, 50, 100);
    doc.setFontSize(18);
    doc.text("Press Kit & Portfólio", 50, 140);
    doc.setFontSize(12);
    doc.text(empresa.site, 50, 170);
    // Apresentação
    doc.setFontSize(16);
    doc.text("Quem somos", 50, 220);
    doc.setFontSize(12);
    doc.text(empresa.apresentacao, 50, 240, { maxWidth: 495 });
    // Serviços
    doc.setFontSize(16);
    doc.text("Serviços", 50, 290);
    doc.setFontSize(12);
    doc.text(servicos.map(s => `- ${s}`).join("\n"), 50, 310);
    // Projetos em destaque
    doc.setFontSize(16);
    doc.text("Projetos em Destaque", 50, 370);
    let y = 390;
    projetos.forEach(proj => {
      doc.setFontSize(13);
      doc.setTextColor(255,255,255);
      doc.text(`• ${proj.titulo}`, 60, y);
      doc.setFontSize(10);
      doc.setTextColor(200,200,200);
      doc.text(proj.descricao, 80, y+15, { maxWidth: 450 });
      doc.setTextColor(180,180,180);
      doc.text(`Cliente: ${proj.cliente}`, 80, y+30);
      y += 50;
    });
    // Depoimentos
    doc.setFontSize(16);
    doc.setTextColor(255,255,255);
    doc.text("Depoimentos", 50, y+20);
    let depoY = y+40;
    depoimentos.forEach(dep => {
      doc.setFontSize(11);
      doc.setTextColor(255,255,255);
      doc.text(`"${dep.comentario}"`, 60, depoY, { maxWidth: 450 });
      doc.setFontSize(10);
      doc.setTextColor(200,200,200);
      doc.text(`- ${dep.nome}, ${dep.cargo}`, 80, depoY+15);
      depoY += 35;
    });
    // Contato
    doc.setFontSize(16);
    doc.setTextColor(255,255,255);
    doc.text("Contato", 50, depoY+20);
    doc.setFontSize(12);
    doc.setTextColor(200,200,200);
    doc.text(`${empresa.contato}\n${empresa.telefone}\n${empresa.local}`, 50, depoY+40);
    doc.save("woota-presskit.pdf");
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