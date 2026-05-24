import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing hover:border-indigo-300 transition-colors min-h-[8rem] ${props.customClass || 'bg-white'}`}
    >
      <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-[#4F46E5] mb-2 shadow-sm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{props.title}</span>
    </div>
  );
}

export default function LayoutToko() {
  const [items, setItems] = useState([
    { id: '1', title: 'Rak Kosmetik A' },
    { id: '2', title: 'Rak Perawatan Kulit' },
    { id: '3', title: 'Meja Kasir' },
    { id: '4', title: 'Etalase Parfum' },
    { id: '5', title: 'Rak Perawatan Rambut' },
    { id: '6', title: 'Rak Aksesoris' },
    { id: '7', title: 'Gudang Kecil' },
    { id: '8', title: 'Pintu Masuk' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const getCustomClass = (title) => {
    if (title.includes('Pintu')) return 'col-span-2 md:col-span-4 bg-gray-200 border-dashed border-2 text-gray-500 min-h-[4rem]';
    if (title.includes('Kasir')) return 'col-span-1 md:col-span-2 bg-indigo-50 border-indigo-200';
    if (title.includes('Gudang')) return 'col-span-1 md:col-span-2 bg-yellow-50 border-yellow-200';
    return 'col-span-1 md:col-span-1 bg-white';
  };

  const handleSaveLayout = () => {
    toast.success('Layout toko berhasil disimpan secara lokal!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Tata Letak Barang</h1>
          <p className="text-sm text-gray-500">Sesuaikan layout toko dengan cara drag & drop (geser posisi)</p>
        </div>
        <button onClick={handleSaveLayout} className="bg-[#4F46E5] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer">
          Simpan Layout
        </button>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 min-h-[500px]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <SortableContext items={items} strategy={rectSortingStrategy}>
              {items.map((item) => (
                <SortableItem key={item.id} id={item.id} title={item.title} customClass={getCustomClass(item.title)} />
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </div>
  );
}
