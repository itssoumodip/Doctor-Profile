"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { 
  MessageCircle,
  Star,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  AlertCircle
} from 'lucide-react'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

// Import Firebase operations
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function TestimonialsManagementPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    condition: '',
    quote: '',
    rating: 5
  });
  const [editingId, setEditingId] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const testimonialsCollection = collection(db, 'testimonials');
      const snapshot = await getDocs(testimonialsCollection);
      const testimonialsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(testimonialsData);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast({
        title: "Error",
        description: "Failed to load testimonials. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRatingChange = (value) => {
    const rating = parseInt(value);
    if (rating >= 1 && rating <= 5) {
      handleInputChange('rating', rating);
    }
  };

  const handleAddTestimonial = async () => {
    try {
      const testimonialsCollection = collection(db, 'testimonials');
      await addDoc(testimonialsCollection, {
        ...formData,
        age: parseInt(formData.age),
        createdAt: new Date().toISOString(),
      });
      
      toast({
        title: "Success",
        description: "Testimonial added successfully!",
        duration: 3000,
      });
      
      // Reset form and refresh list
      setFormData({
        name: '',
        age: '',
        condition: '',
        quote: '',
        rating: 5,
      });
      
      fetchTestimonials();
    } catch (error) {
      console.error('Error adding testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to add testimonial. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleEditInit = (testimonial) => {
    setEditingId(testimonial.id);
    setFormData({
      name: testimonial.name,
      age: testimonial.age.toString(),
      condition: testimonial.condition,
      quote: testimonial.quote,
      rating: testimonial.rating,
    });
  };

  const handleUpdateTestimonial = async () => {
    try {
      if (!editingId) return;
      
      const testimonialRef = doc(db, 'testimonials', editingId);
      await updateDoc(testimonialRef, {
        ...formData,
        age: parseInt(formData.age),
        updatedAt: new Date().toISOString(),
      });
      
      toast({
        title: "Success",
        description: "Testimonial updated successfully!",
        duration: 3000,
      });
      
      // Reset form and refresh list
      setEditingId(null);
      setFormData({
        name: '',
        age: '',
        condition: '',
        quote: '',
        rating: 5,
      });
      
      fetchTestimonials();
    } catch (error) {
      console.error('Error updating testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleDeleteTestimonial = async (id) => {
    try {
      const testimonialRef = doc(db, 'testimonials', id);
      await deleteDoc(testimonialRef);
      
      toast({
        title: "Success",
        description: "Testimonial deleted successfully!",
        duration: 3000,
      });
      
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
        <p className="text-gray-600 mt-2">Add, edit, or remove patient testimonials displayed on your website.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Add New Testimonial Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
            </CardTitle>
            <CardDescription>
              {editingId ? 'Update the existing testimonial information' : 'Create a new patient testimonial to display on your website'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Patient Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="age">Patient Age</Label>
                  <Input 
                    id="age" 
                    placeholder="45" 
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="condition">Medical Condition</Label>
                <Input 
                  id="condition" 
                  placeholder="Hypertension" 
                  value={formData.condition}
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="quote">Testimonial Quote</Label>
                <Textarea 
                  id="quote" 
                  placeholder="The care I received was exceptional..." 
                  className="min-h-[100px]"
                  value={formData.quote}
                  onChange={(e) => handleInputChange('quote', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="rating">Rating (1-5 stars)</Label>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= formData.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-2 flex gap-2">
                {editingId ? (
                  <>
                    <Button onClick={handleUpdateTestimonial} className="flex items-center gap-1">
                      <Save className="h-4 w-4" />
                      Update Testimonial
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setEditingId(null);
                      setFormData({
                        name: '',
                        age: '',
                        condition: '',
                        quote: '',
                        rating: 5,
                      });
                    }}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button onClick={handleAddTestimonial} className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Add Testimonial
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-500" />
              Manage Testimonials
            </CardTitle>
            <CardDescription>
              View and manage all existing patient testimonials
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-3 text-gray-500">Loading testimonials...</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center py-10 border rounded-md bg-gray-50">
                <AlertCircle className="h-10 w-10 text-gray-400 mx-auto" />
                <p className="mt-3 text-gray-500">No testimonials found. Add your first one above.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead className="w-[30%]">Quote</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testimonials.map((testimonial) => (
                      <TableRow key={testimonial.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-sm text-gray-500">{testimonial.age} years</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? 'text-yellow-500 fill-yellow-500'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{testimonial.condition}</TableCell>
                        <TableCell>
                          <p className="line-clamp-2 text-sm">{testimonial.quote}</p>
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditInit(testimonial)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Testimonial?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this testimonial from {testimonial.name}? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                                  className="bg-red-500 hover:bg-red-600"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">View</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Testimonial Details</DialogTitle>
                                <DialogDescription>Full testimonial information</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.age} years, {testimonial.condition}</p>
                                    <div className="flex mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${
                                            i < testimonial.rating
                                              ? 'text-yellow-500 fill-yellow-500'
                                              : 'text-gray-300'
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-medium mb-1">Testimonial</h4>
                                  <div className="bg-gray-50 p-4 rounded-md">
                                    <p className="italic">"{testimonial.quote}"</p>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="text-sm font-medium mb-1">Created</h4>
                                    <p className="text-gray-600">{testimonial.createdAt ? new Date(testimonial.createdAt).toLocaleDateString() : 'N/A'}</p>
                                  </div>
                                  {testimonial.updatedAt && (
                                    <div>
                                      <h4 className="text-sm font-medium mb-1">Last Updated</h4>
                                      <p className="text-gray-600">{new Date(testimonial.updatedAt).toLocaleDateString()}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </div>
  )
}
