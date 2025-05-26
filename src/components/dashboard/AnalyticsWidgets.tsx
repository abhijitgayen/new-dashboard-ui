
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Download, Eye, Users, ShoppingCart, DollarSign } from 'lucide-react';

const AnalyticsWidgets = () => {
  const salesData = [
    { name: 'Mo', value: 400 },
    { name: 'Tu', value: 300 },
    { name: 'We', value: 500 },
    { name: 'Th', value: 280 },
    { name: 'Fr', value: 450 },
    { name: 'Sa', value: 380 },
    { name: 'Su', value: 520 }
  ];

  const conversionData = [
    { month: 'Jan', conversions: 65 },
    { month: 'Feb', conversions: 59 },
    { month: 'Mar', conversions: 80 },
    { month: 'Apr', conversions: 81 },
    { month: 'May', conversions: 56 },
    { month: 'Jun', conversions: 55 }
  ];

  const countryData = [
    { name: 'United States', value: 1999, percentage: 67 },
    { name: 'Canada', value: 799, percentage: 27 },
    { name: 'United Kingdom', value: 299, percentage: 10 },
    { name: 'Germany', value: 199, percentage: 7 }
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#10b981' },
    { name: 'Mobile', value: 35, color: '#3b82f6' },
    { name: 'Tablet', value: 20, color: '#f59e0b' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Website Analytics</h1>
          <p className="text-muted-foreground">
            Track your website performance and user engagement
          </p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">$28,450</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+12.5%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold">2.3K</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+8.2%</span>
                  <span className="text-muted-foreground ml-1">vs last week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sessions</p>
                <p className="text-2xl font-bold">29%</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-red-500">-2.1%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversions</p>
                <p className="text-2xl font-bold">8%</p>
                <div className="flex items-center mt-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+4.3%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Website traffic for the last 28 days
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={conversionData}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    fill="url(#colorGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Countries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Sales by Countries</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {countryData.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-4 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-sm" />
                    <span className="text-sm font-medium">{country.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">+${country.value.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{country.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earning Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Earning Reports</CardTitle>
              <p className="text-sm text-muted-foreground">Last 28 days</p>
            </div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$1,468</span>
                <span className="text-sm text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                  +4.2%
                </span>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis hide />
                    <Bar 
                      dataKey="value" 
                      fill="#e5e7eb" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Earnings</span>
                <span className="text-lg font-bold">$545.69</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Profit</span>
                <span className="text-lg font-bold">$256.34</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Expense</span>
                <span className="text-lg font-bold">$74.19</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsWidgets;
