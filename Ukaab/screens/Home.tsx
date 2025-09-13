import * as React from "react";
import { ScrollView, StyleSheet, View, StatusBar, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { Theme } from "../Theme";

const { width } = Dimensions.get('window');

interface StatData {
    id: string;
    title: string;
    value: string;
    height: number;
}

const statsData: StatData[] = [
    { id: '1', title: 'Total Active Shipments', value: '74', height: 125 },
    { id: '2', title: 'Pending Assignment', value: '4', height: 125 },
    { id: '3', title: 'Delivered This Month', value: '8', height: 125 },
    { id: '4', title: 'Number of Drivers', value: '19', height: 125 }
];

const Home = () => {
    const MetricCard = ({ title, value }: { title: string; value: string }) => (
        <View style={styles.cardContainer}>
            <LinearGradient
                colors={[Theme.palette.secondary, Theme.palette.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.cardGradient}
            >
                <View style={styles.cardContent}>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconPlaceholder} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <Text style={styles.cardValue}>{value}</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );

    const ChartContainer = ({ title, children }: { title: string; children: React.ReactNode }) => (
        <View style={styles.chartContainer}>
            <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>{title}</Text>
                <View style={styles.chartIndicator} />
            </View>
            <View style={styles.chartContent}>
                {children}
            </View>
        </View>
    );

    const WeeklyChart = () => {
        // Data points for the chart line (approximated from the HTML SVG path)
        const chartData = [
            { day: 'Mon', value: 15, x: 40.69, y: 42.45 },
            { day: 'Tue', value: 32, x: 80.27, y: 96.09 },
            { day: 'Wed', value: 18, x: 119.85, y: 45.43 },
            { day: 'Thu', value: 25, x: 159.43, y: 57.35 },
            { day: 'Fri', value: 5, x: 199.01, y: 0.73 },
            { day: 'Sat', value: 12, x: 238.58, y: 33.51 },
            { day: 'Sun', value: 22, x: 278.16, y: 81.19 }
        ];

        return (
            <View style={styles.weeklyChartContainer}>
                {/* Main chart area */}
                <View style={styles.chartArea}>
                    {/* Y-axis */}
                    <View style={styles.yAxis} />

                    {/* Y-axis labels and tick marks */}
                    <Text style={[styles.yAxisLabel, { left: 6.15, top: 1.06 }]}>40</Text>
                    <View style={[styles.yAxisTick, { left: 27.33, top: 3.73 }]} />

                    <Text style={[styles.yAxisLabel, { left: 8.20, top: 27.48 }]}>30</Text>
                    <View style={[styles.yAxisTick, { left: 27.34, top: 33.53 }]} />

                    <Text style={[styles.yAxisLabel, { left: 8.20, top: 57.06 }]}>20</Text>
                    <View style={[styles.yAxisTick, { left: 27.34, top: 63.33 }]} />

                    <Text style={[styles.yAxisLabel, { left: 8.20, top: 87.71 }]}>10</Text>
                    <View style={[styles.yAxisTick, { left: 27.34, top: 93.13 }]} />

                    <Text style={[styles.yAxisLabel, { left: 21.31, top: 117.16 }]}>0</Text>
                    <View style={[styles.yAxisTick, { left: 27.33, top: 122.93 }]} />

                    {/* Horizontal grid lines */}
                    <View style={[styles.gridLine, { left: 30.11, top: 3.73 }]} />
                    <View style={[styles.gridLine, { left: 30.11, top: 33.53 }]} />
                    <View style={[styles.gridLine, { left: 30.11, top: 63.33 }]} />
                    <View style={[styles.gridLine, { left: 30.11, top: 93.13 }]} />
                    <View style={[styles.gridLine, { left: 30.11, top: 122.93 }]} />

                    {/* Vertical grid lines */}
                    <View style={[styles.verticalGridLine, { left: 30.11, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 69.69, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 109.27, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 148.85, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 188.43, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 228.01, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 267.58, top: 3.73 }]} />
                    <View style={[styles.verticalGridLine, { left: 307.16, top: 3.73 }]} />

                    {/* Chart line - simplified with data points */}
                    {chartData.map((point, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dataPoint,
                                {
                                    left: point.x,
                                    top: point.y + 3.73,
                                }
                            ]}
                        />
                    ))}

                    {/* X-axis labels and tick marks */}
                    <Text style={[styles.xAxisLabel, { left: 28.26, top: 133.74, width: 3.71 }]}>0</Text>
                    <View style={[styles.xAxisTick, { left: 30.11, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 59.44, top: 134.21, width: 25.62 }]}>Monday</Text>
                    <View style={[styles.xAxisTick, { left: 69.69, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 98.15, top: 133.74, width: 22.24 }]}>Tuesday</Text>
                    <View style={[styles.xAxisTick, { left: 109.27, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 133.56, top: 133.74, width: 31.04 }]}>Wednesday</Text>
                    <View style={[styles.xAxisTick, { left: 148.85, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 175.92, top: 133.74, width: 25.02 }]}>Thursday</Text>
                    <View style={[styles.xAxisTick, { left: 188.43, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 220.13, top: 133.74, width: 16.22 }]}>Friday</Text>
                    <View style={[styles.xAxisTick, { left: 228.01, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 256, top: 133.74, width: 23.63 }]}>Saturday</Text>
                    <View style={[styles.xAxisTick, { left: 267.59, top: 122.92 }]} />

                    <Text style={[styles.xAxisLabel, { left: 297.20, top: 133.74, width: 24.57 }]}>Sunday</Text>
                    <View style={[styles.xAxisTick, { left: 309.49, top: 122.92 }]} />

                    {/* Main chart border */}
                    <View style={styles.chartBorder} />
                </View>
            </View>
        );
    };

    const DriverStatusChart = () => (
        <View style={styles.pieChartContainer}>
            {/* Pie chart placeholder */}
            <View style={styles.pieChartPlaceholder}>
                <View style={styles.pieCenter}>
                    <View style={[styles.pieSegment, styles.enrouteSegment]} />
                    <View style={[styles.pieSegment, styles.idleSegment]} />
                    <View style={[styles.pieSegment, styles.pendingSegment]} />
                </View>
            </View>

            {/* Legend */}

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Theme.palette.primary} barStyle="light-content" />
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Metrics Cards */}
                <View style={styles.metricsContainer}>
                    {statsData.map((item) => (
                        <MetricCard
                            key={item.id}
                            title={item.title}
                            value={item.value}
                        />
                    ))}
                </View>

                {/* Weekly Shipments Chart */}
                <ChartContainer title="Weekly Shipments Chart               This Week">
                    <WeeklyChart />
                </ChartContainer>

                {/* Driver Status Chart */}
                <ChartContainer title="Drivers Status">
                    <DriverStatusChart />
                </ChartContainer>

                {/* Bottom spacing for navigation */}
                <View style={styles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 28,
        paddingTop: 20,
        paddingBottom: 20,
    },

    // Metrics Cards
    metricsContainer: {
        gap: 10,
        marginBottom: 23,
    },
    cardContainer: {
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    cardGradient: {
        borderRadius: 10,
        padding: 19,
        minHeight: 125,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    iconContainer: {
        width: 70,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconPlaceholder: {
        width: 48,
        height: 48,
        backgroundColor: Theme.palette.primary,
        borderRadius: 24,
    },
    textContainer: {
        flex: 1,
        gap: 13,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
    },
    cardValue: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Inter-Bold',
        fontWeight: '700',
    },

    // Charts
    chartContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 23,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.33,
        shadowRadius: 4,
    },
    chartHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 7,
        paddingHorizontal: 20,
        marginBottom: 8,
    },
    chartTitle: {
        color: '#223931',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        fontWeight: '700',
        textAlign: 'center',
    },
    chartIndicator: {
        width: 23,
        height: 19,
        backgroundColor: 'rgba(34, 57, 49, 0.36)',
        borderRadius: 5,
    },
    chartContent: {
        paddingHorizontal: 10,
    },

    // Weekly Chart
    weeklyChartContainer: {
        height: 149,
        width: '100%',
    },
    chartArea: {
        height: 149,
        position: 'relative',
        overflow: 'hidden',
    },
    yAxis: {
        position: 'absolute',
        left: 30.11,
        top: 3.73,
        width: 2,
        height: 120,
        backgroundColor: 'black',
    },
    yAxisLabel: {
        position: 'absolute',
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        color: 'black',
        textAlign: 'right',
    },
    yAxisTick: {
        position: 'absolute',
        width: 4,
        height: 2,
        backgroundColor: 'black',
    },
    xAxisLabel: {
        position: 'absolute',
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
    xAxisTick: {
        position: 'absolute',
        width: 2,
        height: 6,
        backgroundColor: 'black',
    },
    gridLine: {
        position: 'absolute',
        width: 278,
        height: 2,
        backgroundColor: '#CCCCCC',
    },
    verticalGridLine: {
        position: 'absolute',
        width: 2,
        height: 120,
        backgroundColor: '#CCCCCC',
    },
    dataPoint: {
        position: 'absolute',
        width: 6,
        height: 6,
        backgroundColor: '#269C0B',
        borderRadius: 3,
        marginLeft: -3,
        marginTop: -3,
    },
    chartBorder: {
        position: 'absolute',
        left: 30.11,
        top: 3.73,
        width: 278,
        height: 120,
        borderWidth: 0.5,
        borderColor: '#269C0B',
    },

    // Driver Status Chart
    pieChartContainer: {
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pieChartPlaceholder: {
        width: 120,
        height: 120,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieCenter: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#F0F0F0',
        position: 'relative',
        overflow: 'hidden',
    },
    pieSegment: {
        position: 'absolute',
    },
    enrouteSegment: {
        width: 120,
        height: 60,
        backgroundColor: '#16A34A',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        top: 0,
        left: 0,
    },
    idleSegment: {
        width: 60,
        height: 60,
        backgroundColor: '#3B5B22',
        borderBottomRightRadius: 60,
        bottom: 0,
        right: 0,
    },
    pendingSegment: {
        width: 60,
        height: 60,
        backgroundColor: '#406C5D',
        borderBottomLeftRadius: 60,
        bottom: 0,
        left: 0,
    },
    legendContainer: {
        alignItems: 'flex-start',
        gap: 8,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    legendColor: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    legendText: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        fontWeight: '400',
        color: 'black',
    },

    // Bottom spacing
    bottomSpacing: {
        height: 100,
    },
});

export default Home;
